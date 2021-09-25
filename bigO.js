const mini=['mini']

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

//big O allows us and concerns us with how many steps it takes in a function
