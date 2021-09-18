//Arrays-Objects//


//Reference type vs non-reference
//objects are reference type
//null,bool,true,false these are primitive type

//reference type means these are defined by the programmers
//js creates objects as empty boxes,programmers get to do whatever they want to do

//context vs scope
//scopes are created with {}. inside a function
//context says where we are inside the object//what is the object environment we are in rn
//this references the current object

function a(){
    console.log(this);
}
//instantiation
//making copies of an object
class Player{ //this player object can introduce all the players
    constructor(name,type){   //this constructor function will be calle first and that will instantiate
        console.log(this)
        this.name=name;       //different objects by which we want to mke different objects
        this.type=type;
    }
    introduce(){
        console.log(`Hi I am ${this.name},I'm am a ${this.type}`)
    }

}
class Wizard extends Player{
    constructor(name,type){
        super(name,type)  //whenever we extend a class,we need to super that class 
    }                     //because we also want to use the properties
    play(){
        console.log(`weeee I'm a ${this.type}`);
    }
}

const wizard1=new Wizard('shelly','healer')
const Wizard2=new Wizard('Shaun','Dark magics')



//Building Arrays
//When we build data structures from scratch in this course, we will be using the Javascript's Class keyword to create these data structures.
//Array with the help of classes and constructor

class MyArray{
  constructor(){
    this.length=0;
    this.data={};
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length]=item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem=this.data[this.length-1];
    delete this.data[this.length-1]
    this.length--;
    return lastItem;
  }
  delete(index){
    const item=this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index){
    for(let i=index;i<this.length-1;i++){
      this.data[i]=this.data[i+1];
    }
    // this.data[this.length-1]
  }
}

const newArray=new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('haha');
// newArray.pop();
newArray.delete(1)
console.log(newArray);
