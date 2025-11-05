class QueueAsStack {
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(data){
      this.q2.push(data);

      while(this.q1.length != 0){
        this.q2.push(this.q1[0]);
        this.q1.shift();
      }
      this.swap = this.q1;
      this.q1 = this.q2;
      this.q2 = this.swap;
    }

    pop(){
        const element = this.q1[0];
        this.q1.shift();
        return element;
    }

    top(){
        return this.q1[0];
    }

    printElement(){
        for(let i = 0; i< this.q1.length; i++){
            console.log(this.q1[i]);
        }
    }
}

const S = new QueueAsStack();
S.push(1);
S.push(2);
S.push(3);
S.pop();
S.pop();
const first = S.top()
console.log("first element ", first)
S.printElement()