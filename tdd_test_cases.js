
function formatCurrency(amount) {
    return `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  
  function transformArrayToObject(array) {
    return array.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function convertToCamelCase(string) {
    return string
      .split(' ')
      .map((word, index) => index === 0 ? word : capitalizeFirstLetter(word))
      .join('');
  }
  
  module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
  };
  