/**
 * Given a number return a string with ordinal suffix
 *
 * e.g.:
 * 1 => 1st
 * 2 => 2nd
 * 3 => 3rd
 * 4 => 4th
 */

function getOrdinalSuffix (number) {
  const SPECIAL_ORDINAL_MAP = new Map([
    [1, 'st'], [2, "nd"], [3, "rd"]
  ]);

  const SPECIAL_ORDINAL_SET = [11, 12, 13];

  let remainder = number % 10;
  if (SPECIAL_ORDINAL_MAP.has(remainder)) {
    if (number < 10 ) {
      return `${number}${SPECIAL_ORDINAL_MAP.get(remainder)}`
    }

    // let's use loop to check for 11, 12, 13
    if (number < 20 && ((number - 11) % 10 === 0 || (number - 12) % 10 === 0  || (number - 13) % 10 === 0)) {
      return `${number}th`
    }

    if (number > 100 && ((number - 11) % 100 === 0 || (number - 12) % 100 === 0  || (number - 13) % 100 === 0)) {
      return `${number}th`
    }

    return `${number}${SPECIAL_ORDINAL_MAP.get(remainder)}`
  }

  return `${number}th`
}

function getOrdinalSuffix_2(number) {
  let remainder = number % 10;
  let secondLastDigit = Math.floor((number % 100) / 10);

  if(secondLastDigit === 1 || (remainder > 3 || remainder === 0)) {
    return `${number}th`;
  }

  switch(remainder) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
  }
}

const numbers = [1, 2, 3, 4, 5, 11, 12, 13, 21, 22, 23, 101, 102, 103, 143, 144, 111, 112, 113, 591];

numbers.forEach(number => {
  console.log(number, getOrdinalSuffix_2(number));
});


