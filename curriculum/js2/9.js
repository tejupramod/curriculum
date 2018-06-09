/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (func,newarr =[],i=0) {
    if (this.length ===i)
      return newarr;
    newarr.push(func(this[i]));
    return this.gsMap(func,newarr,i+1);
  }
};

module.exports = {
  solution,
};
