// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (input) => {
  const str = [];
  let i;
  for (i = 0; i < Math.floor((input.length) / 2); i += 1) {
    str[input.length - i - 1] = input[i];
    str[i] = input[input.length - i - 1];
  }
  if (input.length % 2 === 1) {
    str[i] = input[i];
  }
  return str.join('');
};

module.exports = reverse;
