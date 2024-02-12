import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = 'INSERT INTO users(username, password, name) VALUES($1, $2, $3)';
    const values = [username, password, name];
    const result = await client.query(insertQuery, values);
    //console.log(result);
    return result;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    //console.log(result);
    return result.rows[0];

}
