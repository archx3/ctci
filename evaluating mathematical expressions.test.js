const { tokenize, infixToPostfix, evaluatePostfix } = require('./evaluating mathematical expressions.js');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function testTokenize() {
  console.log("Testing tokenize...");
  const tokens = tokenize("2+64x5");
  assert(tokens.length === 5, "Should have 5 tokens");
  assert(tokens[0].value === 2, "First token should be 2");
  assert(tokens[1].value === 'PLUS', "Second token should be PLUS");
  assert(tokens[2].value === 64, "Third token should be 64");
  assert(tokens[3].value === 'MULTIPLY', "Fourth token should be MULTIPLY");
  assert(tokens[4].value === 5, "Fifth token should be 5");
  console.log("tokenize tests passed!");
}

function testInfixToPostfix() {
  console.log("Testing infixToPostfix...");

  // 3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3
  // Postfix: 3 4 2 * 1 5 - 2 3 ^ ^ / +
  const expression = "3+4x2/(1-5)^2^3";
  const tokens = tokenize(expression);
  const postfix = infixToPostfix(tokens);

  const values = postfix.map(t => typeof t.value === 'number' ? t.value : t.value);
  console.log("Converted values:", values);

  // Expected values for "3+4x2/(1-5)^2^3"
  // 3, 4, 2, 'MULTIPLY', 1, 5, 'MINUS', 2, 3, 'POWER', 'POWER', 'DIVIDE', 'PLUS'
  const expected = [3, 4, 2, 'MULTIPLY', 1, 5, 'MINUS', 2, 3, 'POWER', 'POWER', 'DIVIDE', 'PLUS'];

  assert(values.length === expected.length, `Expected length ${expected.length}, got ${values.length}`);
  for (let i = 0; i < expected.length; i++) {
    assert(values[i] === expected[i], `At index ${i}: expected ${expected[i]}, got ${values[i]}`);
  }
  console.log("infixToPostfix tests passed!");
}

function testEvaluatePostfix() {
  console.log("Testing evaluatePostfix...");

  const testCases = [
    { expr: "2+6", expected: 8 },
    { expr: "2+6x5", expected: 32 },
    { expr: "(2+6)x5", expected: 40 },
    { expr: "2^3^2", expected: 512 }, // 2^(3^2) = 2^9 = 512
    { expr: "10-2-3", expected: 5 },  // (10-2)-3 = 5
    { expr: "8/4/2", expected: 1 },   // (8/4)/2 = 1
  ];

  for (const { expr, expected } of testCases) {
    const tokens = tokenize(expr);
    const postfix = infixToPostfix(tokens);
    const result = evaluatePostfix(postfix);
    assert(result === expected, `For ${expr}: expected ${expected}, got ${result}`);
  }
  console.log("evaluatePostfix tests passed!");
}

try {
  testTokenize();
  testInfixToPostfix();
  testEvaluatePostfix();
  console.log("All tests passed!");
} catch (e) {
  console.error("Tests failed!");
  console.error(e);
  process.exit(1);
}

