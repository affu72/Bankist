const now = Date.now();
// const dob = Date.getTime();
console.log(new Date().getTime());
// console.log(now, dob);

const request = new XMLHttpRequest();

var url =
  "https://api.currentsapi.services/v1/latest-news?" +
  "language=us&" +
  "apiKey=HjjgBf_RanJMjSh9SWj1AFJ_AynD5ACfY7n7LWFCYkXGhoMA";

request.open("GET", "https://inshorts.deta.dev/news?category=all");

request.send();

request.addEventListener("load", function () {
  // console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
  // data.forEach((element, i) => {
  //   const str = `Q${i + 1}. ${element["question"]}
  //   a) ${element.answers.answer_a}
  //   b) ${element.answers.answer_b}
  //   c) ${element.answers.answer_c}
  //   d) ${element.answers.answer_d}
  //   `;
  //   console.log(str);
  // });
});
