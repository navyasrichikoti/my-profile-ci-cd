const { validateEmail } = require("./script");

const tests = [
  { email: "navya@gmail.com", expected: true },
  { email: "student@yahoo.com", expected: true },
  { email: "navya@gmail", expected: false },
  { email: "navya.com", expected: false },
  { email: "", expected: false },
  { email: "navya @gmail.com", expected: false }
];

let passed = 0;

tests.forEach((test, index) => {
  const result = validateEmail(test.email);

  if (result === test.expected) {
    console.log(`Test ${index + 1}: PASSED`);
    passed++;
  } else {
    console.log(`Test ${index + 1}: FAILED`);
  }
});

console.log(`${passed}/${tests.length} tests passed.`);