// task1

const t1Range = document.querySelector('.task1_range');
const t1Mods = document.querySelector('.task1_mods');
const t1Ans = document.querySelector('.task1_ans');

function calcTask1Ans(e) {
  let ans = 0;

  const range = t1Range.value.trim().split(' ').map(el => parseInt(el));
  const mods = t1Mods.value.trim().split(' ').map(el => parseInt(el));

  for (let i = range[0]; i <= range[1]; i++) {
    ans += mods.some(el => i % el === 0);
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

  unique.forEach(letter => ans /= factorial(word.filter(el => el === letter).length));

  t2Ans.textContent = ans;
}

t2Word.onkeyup = calcTask2Ans;

// task3

const t3Equation = document.querySelector('.task3_equation');
const t3Ans = document.querySelector('.task3_ans');

function calcTask3Ans(e) {
  let ans = 0;

  const params = t3Equation.value.split('=')[0].trim().split(' ')
    .map(el => parseInt(el));
  const equation = t3Equation.value.split('=')[1].trim().split('*')
    .map(el => el.split('^').map(val => parseInt(val)))
    .reduce((mult, val) => mult * Math.pow(val[0], val[1]), 1);

  for (let x = 1; x < 500; x++) {
    for (let y = 1; y < 500; y++) {
      if (Math.pow(x, params[0]) * Math.pow(y, params[1]) === equation)
        ans++;
    }
  }

  t3Ans.textContent = ans;
}

t3Equation.onkeyup = calcTask3Ans;

// task4

const t4Input = document.querySelector('.task4_input');
const t4Ans = document.querySelector('.task4_ans');

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function calcTask4Ans(e) {
  const input = t4Input.value.split(' ').map(el => parseInt(el));

  let count = 0;

  for (let a = input[0]; a <= input[1]; a++) {
    if (gcd(a, input[2]) === 1)
      count++;
  }

  t4Ans.textContent = count * (input[1] - input[0] + 1);
}

t4Input.onkeyup = calcTask4Ans;
