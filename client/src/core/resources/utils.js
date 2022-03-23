const currencyFormat = (value) => {
  return parseInt(value).toLocaleString();
};

const roundAmount = (amount, decimals) => {
  return Math.round(`${amount}.${decimals}`);
};

export { currencyFormat, roundAmount };