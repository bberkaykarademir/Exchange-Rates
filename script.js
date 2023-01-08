var myHeaders = new Headers();
myHeaders.append("apikey", "YI0hn91BKiysy0ykj5lNVerZ6KHDDj1B");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// const fetchData = () => {
//   fetch(
//     "https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount=${amount.value}",
//     requestOptions
//   )
//     .then((res) => res.text())
//     .then((res) => console.log(res));
// };

const fetchData = async () => {
  const data = await fetch(
    `https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`,
    requestOptions
  );
  const res = await data.json();
  result.value = res.result;
};

const amount = document.querySelector(".amount");
amount.addEventListener("change", () => {
  fetchData();
});

const to = document.querySelector(".to");
const from = document.querySelector(".from");
const result = document.querySelector(".result");

to.addEventListener("change", () => {
  fetchData();
});

from.addEventListener("change", () => {
  fetchData();
});
