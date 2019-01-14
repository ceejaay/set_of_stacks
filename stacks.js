// you set a value to the max value . You push in a value. but before that you do that you check the current value. Then it makes a new array.
// But you need to create pop the extra value into the new array
class StackSet {
  constructor(maxSize) {
    if(arguments.length < 1) {
      throw new Error ("Whoop, max size is required.")
    }
    this.stacks = [[]]
    this.maxSize = maxSize
  }


  push(value) {
    if ( this.stacks[this.stacks.length - 1].length === this.maxSize ) {
      this.stacks.push([])
    }
    this.stacks[this.stacks.length -1].push(value)
  }

  pop() {
    const value = this.stacks[this.stacks.length - 1].pop()
    if(this.stacks.length > 1 &&
        this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop()
    }
    return value
  }

  popAt(number) {
    if(number < 1 || number > this.stacks.length) {
      throw new Error ('This number is either too small or too large for our stack')
    }

    if( number === this.stacks.length ) {
      return  this.pop()
    }

    let stack = this.stacks[number - 1]
    let value = stack.pop()
    let nextStack = []


    for(let i = number; i< this.stacks.length; i++) {
      nextStack = this.stacks[i];
      nextStack.reverse();
      stack.push(nextStack.pop());
      nextStack.reverse();
      stack = nextStack;
    }

    if(this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop()
    }

    return value;
}

}




const stack = new StackSet(3)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.push(8)
console.log('here are the stacks', stack.stacks)

console.log('we pop a value in stack 2', stack.popAt(1)) 
console.log('the result of the stacks', stack.stacks)

  
