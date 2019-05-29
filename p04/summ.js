"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 212
};

var summ = 0;

for (var key in salaries) {
  summ = summ + salaries[key];
}

alert( summ );
