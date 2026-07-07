const SMALL_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in',
  'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v.', 'vs.', 'via',
]);

/**
 * High-performance Title Case conversion using a single-pass regex.
 */
export function toTitleCase(str: string): string {
  if (!str) return '';

  // Use a single regex to find "words" (sequences of letters/dots)
  // \S+ matches any non-whitespace sequence
  const words = str.toLowerCase().split(/(\s+|-)/);
  const lastIdx = words.length - 1;

  let result = '';

  for (let i = 0; i <= lastIdx; i++) {
    const word = words[i];

    // If it's a separator (space or hyphen), just append it
    if (word === '-' || word.match(/^\s+$/)) {
      result += word;
      continue;
    }

    // Capitalize if:
    // 1. It's the first word of the string (i === 0)
    // 2. It's the last word of the string (i === lastIdx)
    // 3. It's not in our small words set
    if (i === 0 || i === lastIdx || !SMALL_WORDS.has(word)) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      result += word;
    }
  }

  return result;
}

// 1. Setup our implementations

function naiveVersion(str: string): string {
  if (!str) return '';

  // Use a regex to capture spaces and hyphens so we can rebuild the string perfectly
  // This splits "step-by-step" into ["step", "-", "by", "-", "step"]
  const tokens = str.toLowerCase().split(/([ \t\-])/);

  return tokens
    .map((word, index, array) => {
      // If it's a separator (space or hyphen), return as is
      if (/^[ \t\-]$/.test(word)) return word;

      const isFirst = index === 0;
      const isLast = index === array.length - 1;
      const isSmallWord = SMALL_WORDS.has(word);

      // Rule: Capitalize if it's the first word, last word, or NOT a small word
      if (isFirst || isLast || !isSmallWord) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      return word;
    })
    .join('');
}

function optimizedVersion(str: string) {
  if (!str) return '';
  const tokens = str.toLowerCase().split(/(\s+|-)/);
  const lastIdx = tokens.length - 1;
  let result = '';
  for (let i = 0; i <= lastIdx; i++) {
    const word = tokens[i];
    if (word === '-' || /^\s+$/.test(word)) {
      result += word;
      continue;
    }
    if (i === 0 || i === lastIdx || !SMALL_WORDS.has(word)) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      result += word;
    }
  }
  return result;
}
function optimizedVersion2(str: string): string {
  if (!str) return '';

  // Use a single regex to find "words" (sequences of letters/dots)
  // \S+ matches any non-whitespace sequence
  const words = str.toLowerCase().split(/(\s+|-)/);
  const lastIdx = words.length - 1;

  let result = '';

  for (let i = 0; i <= lastIdx; i++) {
    const word = words[i];

    // If it's a separator (space or hyphen), just append it
    if (word === '-' || word.match(/^\s+$/)) {
      result += word;
      continue;
    }

    // Capitalize if:
    // 1. It's the first word of the string (i === 0)
    // 2. It's the last word of the string (i === lastIdx)
    // 3. It's not in our small words set
    if (i === 0 || i === lastIdx || !SMALL_WORDS.has(word)) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      result += word;
    }
  }

  return result;
}

export const optimizedVersion3 = function (str: string) {
  const smallWords = new Set([
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'en',
    'for',
    'if',
    'in',
    'nor',
    'of',
    'on',
    'or',
    'per',
    'the',
    'to',
    'v.',
    'vs.',
    'via',
  ]);
  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
  const wordSeparators = /([ :–—-])/;

  return str
    .split(wordSeparators)
    .map(function (current, index, array) {
      if (
        /* Check for small words */
        smallWords.has(current.toLowerCase()) &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== '-' || (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase();
      }

      /* Ignore intentional capitalization */
      if (current.substring(1).search(/[A-Z]|\../) > -1) {
        return current;
      }

      /* Ignore URLs */
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return current;
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase();
      });
    })
    .join('');
};

// 2. The Benchmark Runner
const iterations = 100_000;
const testStr = "the quick-brown fox jumps over the lazy dog vs. a cat";

console.log(`Running ${iterations.toLocaleString()} iterations...\n`);

// Warm up the engine (JIT optimization)
for (let i = 0; i < 1000; i++) {
  naiveVersion(testStr);
  optimizedVersion(testStr);
  optimizedVersion2(testStr);
  optimizedVersion3(testStr);
}

// Test Naive
console.time('Naive Implementation');
for (let i = 0; i < iterations; i++) {
  naiveVersion(testStr);
}
console.timeEnd('Naive Implementation');

// Test Optimized
console.time('Optimized Implementation');
for (let i = 0; i < iterations; i++) {
  optimizedVersion(testStr);
}
console.timeEnd('Optimized Implementation');

// Test Optimized 2
console.time('Optimized Implementation 2');
for (let i = 0; i < iterations; i++) {
  optimizedVersion2(testStr);
}
console.timeEnd('Optimized Implementation 2');

// Test Optimized 3
console.time('Optimized Implementation 3');
for (let i = 0; i < iterations; i++) {
  optimizedVersion3(testStr);
}
console.timeEnd('Optimized Implementation 3');
