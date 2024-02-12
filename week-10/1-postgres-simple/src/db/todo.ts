import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertQuery = "INSERT INTO todos (userId, title, description) VALUES($1, $2, $3) RETURNING title, description, done, id";
    const values = [userId, title, description];
    const result = await client.query(insertQuery, values);
    //console.log(result);
    return result.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateTodos = "UPDATE todos SET done = $1 WHERE id = $2 RETURNING title, description, done, id";
    const values = [true, todoId];
    const result = await client.query(updateTodos, values);
    //console.log(result);
    return result.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getTodos = "SELECT * FROM todos WHERE userid = $1";
    const result = await client.query(getTodos, [userId]);
    //console.log(result);
    return result.rows;
}