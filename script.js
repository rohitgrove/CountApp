// const countValue = document.querySelector("#counter"); // both method is correct querySelector and getElementById.
const countValue = document.getElementById("counter");

const increment = () => {
  // get the value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value = value + 1;
  // set the value onto UI
  countValue.innerText = value;
};

const decrement = () => {
  // get the value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value = value - 1;
  // set the value onto UI
  countValue.innerText = value;
};
