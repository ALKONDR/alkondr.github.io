// task1

const t1Range = document.querySelector('.task1_range');
const t1Mods = document.querySelector('.task1_mods');
const t1Ans = document.querySelector('.task1_ans');

console.dir(t1Ans);

function calcTask1Ans(e) {
  let ans = 0;

  const range = t1Range.value.trim().split(' ').map(el => parseInt(el));
  const mods = t1Mods.value.trim().split(' ').map(el => parseInt(el));

  for (let i = range[0]; i < range[1]; i++) {
    ans += mods.every(el => i % el === 0);
  }

  console.log(range, mods);

  t1Ans.textContent = ans;
}

t1Range.onkeyup = calcTask1Ans;
t1Mods.onkeyup = calcTask1Ans;
