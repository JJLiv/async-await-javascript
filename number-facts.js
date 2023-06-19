let favNumber = 67;
let baseURL = "http://numbersapi.com";


async function getFavNumFact() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
getFavNumFact();


const getMultNumData = [7, 11, 22];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
getMultNumData();


async function fourFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
fourFacts();
