const mini=['mini']
//const large= new Array('10000').fill('mini') creating a new array and filling 10000 mini in that
function findMini(array){
    let t0=performance.now(); //built-in method
    for(let i=0;i<array.length;i++){
        if(array[i]==='mini'){
        console.log("found mini");
        }
    }
    let t1=performance.now();
    console.log("call to find mini took"+(t1-t0)+"ms")
}
findMini(mini)
//findMini(large) //it's O(n)/ no. of operations here is n 
//so it' linear here/ no. of operations increasing linearly

//big O allows us and concerns us with how many steps it takes in a function



//O(1)

const boxes=[0,1,2,3,2,3,2,3,4]
function logFirstTwoBoxes(boxes){
console.log(bosex[0]); //O(1)
console.log(boxes[1]); //O(1)
}

so it's totally O(2),basically it's O(1), means it's excellent code, highly scalable, it means it will take constant time always
