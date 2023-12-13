/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
