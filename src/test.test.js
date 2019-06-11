const generateNumber = () => {
  return 10
}

it('generateNumber() returns a number greater than 0 but less than 100', () => {
  const number = generateNumber()
expect(number > 0).toBeTruthy()
expect(number < 100).toBeTruthy()
});
