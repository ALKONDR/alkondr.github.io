// task1

const t1Range = document.querySelector('.task1_range');
const t1Mods = document.querySelector('.task1_mods');
const t1Ans = document.querySelector('.task1_ans');

function calcTask1Ans(e) {
  let ans = 0;

  const range = t1Range.value.trim().split(' ').map(el => parseInt(el));
  const mods = t1Mods.value.trim().split(' ').map(el => parseInt(el));

  for (let i = range[0]; i <= range[1]; i++) {
    ans += mods.every(el => i % el === 0);
  }

  t1Ans.textContent = ans;
}

t1Range.onkeyup = calcTask1Ans;
t1Mods.onkeyup = calcTask1Ans;

// task2

const t2Word = document.querySelector('.task2_word');
const t2Ans = document.querySelector('.task2_ans');

const factorial = (val) => val <= 1 ? val : val * factorial(val - 1);

function calcTask2Ans(e) {
  const word = t2Word.value.split('');
  const unique = word.filter((val, ind, self) => self.indexOf(val) === ind);

  ans = factorial(word.length);

  console.log(word, unique);

  unique.forEach(letter => ans /= factorial(word.filter(el => el === letter).length));

  t2Ans.textContent = ans;
}

t2Word.onkeyup = calcTask2Ans;
