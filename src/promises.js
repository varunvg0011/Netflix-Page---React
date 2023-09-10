/*
fulfilled
rejected
pending
settled
let myPromise=new Promise((resolve,reject)=>{
    //code
    resolve()
    reject()
})
myPromise.then(()=>{

}).then()
.then()
.catch(()=>{

})
*/

let myPromise=new Promise((resolve,reject)=>{
    let x=0
    let y=0
    let o=x/y
    if(x==0){
        resolve()
    }
    else{
        reject()
    }
})


//1st hitting point is at myPromise when it is called
//then it goes to myPromise and get the result settled with either success/resolve or reject/failure
//once settled then it goes to 'then' function part
//Incase of error it goes to catch
myPromise.then((res)=>{
    console.log("***********",res)
}).catch(err=>{
    console.log(err)
})