/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b) =>{
        if(a[0] != b[0]){
            return  b[0] - a[0];
        } else{
            return a[1] - b[1];
        }        
    });
    
    let res = [];    
    // reconstruct queue by inserting people by its k value
    for(let i = 0; i < people.length; i++) {
        
        res.splice(people[i][1], 0, people[i]);
    }    
    return res;
};


// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
// sort
// [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]


// iterate 1
// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
