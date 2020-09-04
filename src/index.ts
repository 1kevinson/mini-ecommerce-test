// @ts-nocheck
function featuredProducts(products: Array<string>) {
  const init = {};
  let reducer = (
    accumulator: { [productName: string]: number },
    current: string | number
  ) => {
    if (!accumulator[current]) {
      accumulator[current] = 1;
    } else {
      accumulator[current] += 1;
    }
    return accumulator;
  };

  return products.reduce(reducer, init);
}

function main(): string {
  let products: Array<string> = [
    "redShirt",
    "redPants",
    "redPants",
    "redShirt",
    "redShirt",
    "redShirt",
    "redPants",
    "bluePants",
    "blackShoes",
    "whiteShirt",
    "redPants",
    "redShirt",
    "redPants",
    "greenShirt",
    "blackShoes",
    "whiteShirt",
    "greenShirt",
  ];

  const countedProducts = featuredProducts(products);
  let sortedProducts = [];
  let mostPurchased = [];
  let featuredProduct: string;

  for (let product in countedProducts) {
    sortedProducts.push([product, countedProducts[product]]);
  }

  sortedProducts
    .sort((x, y) => x[1] - y[1])
    .map((el) => {
      el[1] === sortedProducts[sortedProducts.length - 1][1]
        ? mostPurchased.push(el[0])
        : 0;
    });

  featuredProduct = mostPurchased.sort((a, b) => a - b)[
    mostPurchased.length - 1
  ];

  return `The Featured product for tomorrow is : ${featuredProduct}`;
}

console.log(main());
