/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let hash = {};
    for (let c of S) hash[c] = hash[c] + 1 || 1;
    // Skill1, Skill2
    // characters數量由大排到小
    let sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]); 
    let res = [];   
    let index = 0;  //用在回傳res上的
    // traverse the sorted array
    for (let i = 0; i < sort.length; i++) {
      let occur = hash[sort[i]];  //the number of that char
      if (occur > Math.floor( (S.length + 1) /2)) return "";  // Story1
      for (let j = 0; j < occur; j++) {
          if (index >= S.length) index = 1; //odd的位置,放到盡頭了後,這樣res開始放even位置上
          res[index] = sort[i];
          index += 2;         
      }
    } 
    return res.join('');
};

console.log(reorganizeString("aaabb"));


/**
  Skill1 - What is Object.keys(obj)
  it returns an array of object's own names
  
  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));
  // expected output: Array ["a", "b", "c"]
 
  Skill2 - What is Math.floor() 
  取小於這個數的最大整數
  Math.floor(3.14) // 3
  Math.floor(-5.4) // -6
  Math.floor("-5.5") // -6
*/
/**
  Story1 - 為什麼S.length + 1
  因為如果有某個相同字串長度超過總廠度的一半
  aaaaabb -> 
  這樣就無法成立條件,怎麼排都無法讓每個相同字元隔開,
  但如果只是單純的用長度 / 2 所取得的中間值  
  aaaabbb -> abababa
  這個看起來'a'是超過一半但其實, 還是符合條件可以拚成兩相同個字元隔開,
  所以給這個長度 + 1來做判斷就行了

  (7 + 1) / 2 = 4 
  也就是長度7的字串, 他的相同字母的數量要超過4才算不符合條件
*/
  
/**
  Story2 - 
  // 基數和偶數的交叉插入數值
  用來判斷這個character的
  
  res = [a, ,]
             ^
*/


/**
  hash
  a: 3
  b: 2

  sort: ["a", "b"]
  res: []

  occur: 3

  */ 
