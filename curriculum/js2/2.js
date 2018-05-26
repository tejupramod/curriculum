
`/**
 * Given an array, return the same array
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return [];
  const solution = (arr,new arr=[],i=0)=>{
    if(arr.length===i){
      return new arr;
    }
    if(arr[i]%2===0){
      return newarr.push(0);
    }
    else {
      return arr;
    }
    retrun solution(arr,newarr,i+1);
  }
};

module.exports = {
  solution,
};
