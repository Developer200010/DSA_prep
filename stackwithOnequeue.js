class StackWithOneQueue{
    constructor(){
        this.q = [];
    }

    push(data){
        this.q.push(data);
        const length = this.q.length - 1;

        for(let i = 0; i< length; i++){
            this.q.push(this.q[0]);
            this.q.shift();
        }
    }

    pop(){
        if(this.q.length == 0){
            console.log("stack is underflow");
            return;
        }
        const element = this.q[0];
        this.q.shift();
        return element;

    }

    top(){
        return this.q[0];
    }
    printElement(){
        for(let i = 0;i<this.q.length; i++){
            console.log(this.q[i]);
        }
    }
}

const s = new StackWithOneQueue();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
const popped = s.pop()
console.log("popped element ",popped)
console.log(s.top(), " first")
s.printElement()