/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0 || points === null) return 0; 
    points.sort((a,b) => a[1] - b[1]);
    
    let end = points[0][1];
    let cnt = 1;
    for(let i = 1; i < points.length; i++){
        if(end >= points[i][0]){
            continue;
        }
        
        cnt++;
        end = points[i][1];        
    }
    
    return cnt;
};


// [[10,16], [2,8], [1,6], [7,12]]
//       e
//            i
