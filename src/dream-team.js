const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!members){
    return false;
  }

  let result = [];
  let resultString = '';
  for(let i = 0; i < members.length; i++){
    if((typeof members[i]) === 'string'){
      console.log(members[i]);
      let member = members[i].trim();
      result.push(member[0].toUpperCase());
    }
  }
  console.log(result);
  result.sort();
  for(let i = 0; i < result.length; i++){
    resultString += result[i]; 
  }
  return resultString;
}

module.exports = {
  createDreamTeam
};
