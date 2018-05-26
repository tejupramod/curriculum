/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return [];
  const isPrime =(a,i=0)=>{
    if(a===1)
      return false;
    if(i===a)
      return true;
    if(a%i===0)
      return false;
    const solution=(a=[],array=[],i)=>{
      if(i===a.length)
        return array;
      if(!isPrime(a[i])
        array.push(1);
        else
        array.psuh(a[i]);
        return solution(a,array,i+1)


};

module.exports = {
  solution,
};
