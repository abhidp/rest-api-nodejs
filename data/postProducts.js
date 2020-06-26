const faker = require('faker');
const no_of_products = 20;
const axios = require('axios');
const precision = 100; // 2 decimals

for (let i = 0; i < no_of_products; i++) {
  const name = faker.commerce.productName();
  const price =
    Math.floor(
      Math.random() * (100 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision);

  axios
    .post('http://localhost:5000/products', {
      name,
      price,
    })
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}
