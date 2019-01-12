// you set a value to the max value . You push in a value. but before that you do that you check the current value. Then it makes a new array.
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

  value() {
    return this.stacks[0].length
  }
}




const stack = new StackSet(3)
stack.push(2)
stack.push('f')
stack.push(4)
stack.push(4)
stack.push(4)
stack.push(4)
stack.push(4)

console.log(stack.value())
console.log(stack)

  
