/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let length = points.length;
    let res = 0;
    var getDistance= (x, y) => {
        let xdis = (x[0] - y[0]);
        let ydis = (x[1] - y[1]);
        return xdis * xdis + ydis * ydis; // 這是distance的平方而不是distance本身
    }
    for(let i = 0; i < length; i++){        // 遍歷有幾個點
        let map = new Map();                // 用來存距離的資訊, 之後用來判斷
        for(let j = 0; j < length; j++){    // 第2個迴圈是遍歷 [0,1<] 就是y值
            if(i == j) continue;            // 代表在同一個點上, 就不用比較
            let dist = getDistance(points[i], points[j]);
            map.set(dist, (map.get(dist) || 0) + 1);    // 如果是第一次出現, 我們就把distance 設1
        }
        for(let value of map.values()){
            res += value * (value - 1);
        }
    }
    return res;
};
//[[0,0],[1,0],[2,0]]


/**
 * 
 * 思路
    这题换个说法就是，在二维坐标系下有若干个点，求满足x和y的距离与y和z的距离相等的三个点x、y和z的数目。
    想要知道距离是否相等，那首先就要知道距离的值，这样就免不了要遍历了。即对于每个点y，遍历其他的点，
    并寻找不同的点x和z，满足x和y的距离与y和z的距离相等。怎么来统计距离相等的点的数目呢？这里有一个优化的方法，对于点y，遍历其他点时，
    我们只需要用一个Map来维护(距离, 点的个数)这样的键值对。遍历完成后再遍历这个Map，如果值为2，则代表有两个点满足要求，
    记录满足要求的(x, y, z)为2（因为题目要求考虑点的顺序，所以(x, y, z)和(z, y, z)都分别满足题目要求）；而如果值大于2，则代表有多个点满足要求，
    而且其中任意两个点的排列（考虑到顺序）都是符合题意的。这样就得到了以y为中心点的满足题目要求的情况数目，遍历完所有的点即得到最终结果。
 */
