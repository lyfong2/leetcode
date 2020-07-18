class Queue {
    constructor(){
        this.elements = [];
    }
    
    // adds an element at the end of the queue
    enqueue(e){
        this.elements.push(e);
    }
    
    // remove an element form the front of the queue
    dequeue(){
        return this.elements.shift();
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    peek(){
        return !this.elements.isEmpty() ? this.elements[0]: undefined;
    }
    length(){
        return this.elements.length;
    }
}
