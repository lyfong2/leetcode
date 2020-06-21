/**
 * Initialize your data structure here.
 */

// Queue: First In First Out
//
var MyQueue = function() {
    this.s1 = [];  // 代表的是沒進行處理的stack, queue的反方向
    this.s2 = [];  // 代表是經過處理的stack, 和queue的方向是一樣的
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length !== 0){ //如果有處理過的值, 就pop處理過的
        return this.s2.pop();
    } else {
        while(this.s1.length !== 0){
            // queue : 3 2 1
            // s1 : [1 2 3] -> 
            // s2 : [3 2 1] -> 轉變過後就是queue的順序
            this.s2.push(this.s1.pop());
        }
        return this.s2.pop();
    }    
};


/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length !== 0){
        return this.s2[this.s2.length - 1];
    } else {
        while (this.s1.length !== 0){
            this.s2.push(this.s1.pop());
        }
        return this.s2[this.s2.length - 1];
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
