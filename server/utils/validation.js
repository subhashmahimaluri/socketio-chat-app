var isRealString = (str) => {
  return typeof str === 'string' && str.trim().lenth > 0;
};

module.exports = {isRealString};
