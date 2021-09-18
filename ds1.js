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


//Reverse a string
function reverse(str){
  //check the input
  if(!str||str.length<2||typeof(str)!=='string'){
    return ('hmm that is not good ')
  }
  const backwards=[];
  const totalItems=str.length-1;
  for(let i=totalItems;i>=0;i--){
    backwards.push(str[i]);
  }
  return backwards.join('') //we will return a string only, join converts to a string from an array
}
reverse('Hi my name is Apurba')


//2nd way\\
function reverse2(str){
  return str.split('').reverse().join('')   //.split to convert from str to arr, .join to convert from str to arr
}
reverse2('Hi this is Apurba')


//3rd Way\\
function reverse3 = str=>str.split('').reverse().join('');
//with Spread operator\\
function reverse4 = str=>[...str].reverse().join('');


// Given two arrays\\
// build a function that will return true if, there is a common Element,
// will return false if those two arrays don't have a common element\\
const arr1=['a','b','c','d','e'];
const arr2=['x','y','z'];

function containsCommonItems(arr1,arr2)
{
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++)
    {
      if(arr1[i]===arr2[j]){
        return true;
      }
    }
  }
  return false
}             //but problem with this solution is, this has nested for loops,so it's not very efficient
              //this is of O(n^2), it's actually O(a*b)


const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['x', 'y', 'z','a'];
//array1==>obj{
//a:true
//b:true
//c:true
//d:true
//e:true
//}
//array2[index]===obj.properties[will check if elements of arr2 is present in the object or not] //we wiil be using this approach a lot of times
//in this we can only loop through arr2, this will decrease the time complexity dramatically

function containsCommonItem2(arr1, arr2){
  //loop through first array and create object where properties===items in the array
  //loop through 2nd array and chheck if item in 2nd array exists on created object.
  //here it's O(a+b),it's a big saving

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;

    }
  }
  // console.log(map)
  //loop through 2nd array and check if item in 2nd array exists on created object.
  for (let j=0;j<arr2.length;j++){
    if(map[arr2[j]]){
      return true
    }
  }
  return false


}
 containsCommonItem2(arr1, arr2)
