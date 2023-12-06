/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Your code here
  let categoryMap = new Map();
  for(let i = 0; i < transactions.length; i++){
    let category = transactions[i].category;
    let price = transactions[i].price;
    if(categoryMap.has(category)){
      let currentPrice = categoryMap.get(category);
      categoryMap.set(category, currentPrice + price);
    } else {
      categoryMap.set(category, price);
    }
  }
  let result = [];
  for(let [key, value] of categoryMap){
    result.push({"category": key, "totalSpent": value});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
