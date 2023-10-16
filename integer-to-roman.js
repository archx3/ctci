/*
* Integer to Roman
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
  I            1
  V            5
  X            10
  L            50
  C            100
  D            500
  M            1000
*
* For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
*
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.
* */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = '';

  const VALUE_MAP = new Map([
    [1000000, { symbol: 'M̄', value: 0, nexDivisor: 500000 }],
    [500000, { symbol: 'D̄', value: 0, nexDivisor: 100000 }],
    [10000, { symbol: 'X̄', value: 0, nexDivisor: 5000 }],
    [5000, { symbol: 'V̄', value: 0, nexDivisor: 1000 }],
    [1000, { symbol: 'M', value: 0, nexDivisor: 500 }],
    [500, { symbol: 'D', value: 0, nexDivisor: 100 }],
    [100, { symbol: 'C', value: 0, nexDivisor: 50 }],
    [50, { symbol: 'L', value: 0, nexDivisor: 10 }],
    [10, { symbol: 'X', value: 0, nexDivisor: 5 }],
    [5, { symbol: 'V', value: 0, nexDivisor: 1 }],
    [1, { symbol: 'I', value: 0, nexDivisor: 1 }],
  ]);

  let divisor = 1000

  while (num > 0) {
    VALUE_MAP.set(divisor, {...VALUE_MAP.get(divisor), value: Math.floor(num / divisor) });

    num = num % divisor;
    divisor = VALUE_MAP.get(divisor).nexDivisor;
  }

  for (let [key, value] of VALUE_MAP) {
    if (value.value === 0) continue;

    if (value.value === 4) {
      roman += value.symbol + VALUE_MAP.get(key * 5).symbol;
    } else if (value.value === 9) {
      roman += value.symbol + VALUE_MAP.get(key * 10).symbol;
    } else {
      roman += value.symbol.repeat(value.value);
    }
  }

  return roman;
};


function intToRoman_byAI(num) {
  let romanMap = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]);

  let result = '';

  for (let [key, value] of romanMap.entries()) {
    while (num >= key) {
      result += value;
      num -= key;
    }
  }

  return result;
}

function recursiveIntToRoman(num) {
  if (num < 1) return "";
  if (num >= 1000) return "M" + intToRoman(num - 1000);
  if (num >= 900) return "CM" + intToRoman(num - 900);
  if (num >= 500) return "D" + intToRoman(num - 500);
  if (num >= 400) return "CD" + intToRoman(num - 400);
  if (num >= 100) return "C" + intToRoman(num - 100);
  if (num >= 90) return "XC" + intToRoman(num - 90);
  if (num >= 50) return "L" + intToRoman(num - 50);
  if (num >= 40) return "XL" + intToRoman(num - 40);
  if (num >= 10) return "X" + intToRoman(num - 10);
  if (num >= 9) return "IX" + intToRoman(num - 9);
  if (num >= 5) return "V" + intToRoman(num - 5);
  if (num >= 4) return "IV" + intToRoman(num - 4);
  return "I" + intToRoman(num - 1);
}

function intToRomanLong(num) {
  var M = ["", "M", "MM", "MMM"]; // Thousands
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]; // Hundreds
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; // Tens
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; // Units

  return M[Math.floor(num/1000)] + C[Math.floor(num%1000/100)] + X[Math.floor(num%100/10)] + I[num%10];
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 58, 1994, 3502, 2000, 2023, ];

// numbers.forEach(num => console.log(intToRomanLong(num)));
console.log(intToRoman(1994))
console.log(intToRomanLong(1994))
