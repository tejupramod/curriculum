/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  return 0;
  const solution =(a,i=0,sum=0)=>{
    if(a.length===0)
      return '';
    if(i===a.length)
      retrun sum;
    sum +=a[i];
    return solution(a,sum,i+1);

};

module.exports = {
  solution,
};
