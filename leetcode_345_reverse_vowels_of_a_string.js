var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O','U'];
  let i = 0;
  let j = s.length - 1;
  let result = [];
  while(i <= j){
    let ci = s[i];
    let cj = s[j];
    if (!vowels.includes(ci)){
      result[i++] = ci;
    } else if(!vowels.includes(cj)){
      result[j--] = cj;
    } else {
      result[i++] = cj;
      result[j--] = ci;    
    }
  }
  return result.join('');
}
