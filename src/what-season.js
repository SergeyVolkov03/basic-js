const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(arguments[0].toString() == new Date().toString()){
    return 'Unable to determine the time of year!';
  }
  
  if (date.toString() == "Invalid Date"){
    throw  "Invalid date!";
  }

  if(date.toString()){
    let month = date.toString().slice(4, 7);
    console.log(month);
    if ( month == 'Dec' || month == 'Jan' || month == 'Feb'){
      return 'winter';
    } else if ( month == 'Mar' || month == 'Apr' || month == 'May'){
      return 'spring';
    } else if ( month == 'Jun' || month == 'Jul' || month == 'Aug'){
      return 'summer';
    } else if ( month == 'Sep' || month == 'Oct' || month == 'Nov'){
      return 'autumn';
    } 
  }
}

module.exports = {
  getSeason
};
