"use strict";

var salaries = {
  "Вася": 1000,
  "Петя": 3010,
  "Даша": 2250
};

var max = 0;

for (var key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
  }

}

alert( max );
