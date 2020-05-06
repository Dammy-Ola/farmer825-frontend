const how_many = document.querySelector('#how_many');
const cal_total = document.querySelector('#cal_total');

how_many.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  cal_total.innerHTML = 1575 * e.target.value;
});
