/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = (s, d) =>{
  let longest = '';
  d.sort();

  for(let i = 0; i < d.length; i++){
    let curr = d[i];
    let sPointer = 0;
    let currPointer = 0;

    while (sPointer < s.length && currPointer < curr.length){
      if (s[sPointer] === curr[currPointer]){
        sPointer++;
        currPointer++;
      } else {
        sPointer++;
      }
    }
    
    if(currPointer === curr.length){
      if(curr.length > longest.length){
        longest = curr;
      }
    }
  }
  return longest;
}
