/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let map = new Map();
    let res = 0;
    for(let i = 1; i <= n; i++){
        map.set(i * i, i);
    }

    console.log(map);
    /* 
        map { 
            1 => 1, 
            4 => 2, 
            9 => 3, 
            16 => 4, 
            25 => 5 
        }
    */ 
    
    for(let i of map){
        // console.log(item);
        let c = i[0];
        for(let j of map){
            let b = j[0]
            if(b !== c){
                // console.log('a = ' + a,'c = ' + c);
                for(let k of map){
                    let a = k[0];
                    if( a !== b && a !== c){
                        if(a+b===c){
                            res++;
                        }
                    }
                }
            }
        }

        // console.log('key',item[0]);
        // console.log('value',item[1]);
    }



    return res;
};

console.log(countTriples(10));
/**
 *  Input: n = 5
    Output: 2
    Explanation: The square triples are (3,4,5) and (4,3,5).

    1. 先求1~5的平方, 這些是可能的c值
    [1, 4, 9, 16, 25]

    
    Map {   
            1 => 1, 
            4 => 2, 
            9 => 3, 
            16 => 4, 
            25 => 5 
        }
                   
    
    2. 遍歷可能的c值
    [1, 4, 9, 16, 25]
        c
           b
              a
     

    3. 指針的數跟每個其他的數相減 
    [1, 4, 9, 16, 25]
                   ^
    相減後
    -------------------
    [24,21,16,9]

    4. 找出可以相加為25的
    
    






 */