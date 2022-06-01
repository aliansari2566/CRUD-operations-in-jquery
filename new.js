var arr = [1,3,5,7,9];
var arr2 = [2,4,6,8,10];



var sizeofarr=arr.length
for (let i = 0; i < arr.length; i++) 
{
    
    console.log(arr[i])
}
var arr3=arr.concat(arr2)
console.log(arr3)

const temparr=arr3.map(function (value,index) {
    console.log(value,index)
    if(value%2!=0)
    {
       return value+1
    }
    else{
        return value
    }
    
    
})
// console.log("temp arr = ", temparr)
// let number = prompt("Please enter integer");

// const found = arr.find(function (value,index) {

//     if(value=== parseInt (number))
//     {
//         return true
//     }
    
// })
// if(found===undefined)
// {
//     alert("not found")
// }
// else{
//     alert("found")
// }

// console.log("found",found);
// console.log(arr);


// const lessthan = arr.filter(function (value,index) {

//     return value < 4 
// })
// console.log("values less then 4",lessthan)

// const temparry = arr2.map(function (value,index) {

//     if(value<7)
//     {
//         return value
//     }
    
// })
// console.log("temp arr =  ",temparry);

function addName (time, name){
    return new Promise ((resolve, reject) => {
      if(name){
        setTimeout(()=>{
          console.log(name)
          resolve();
        },time)
      }else{
        reject('No such name');
      }
    })
  }


  function sumPromise (b){
    return new Promise ((resolve, reject) => {
        if(!b){
          reject("please pass params")
        }
        resolve(b);
    })
  }


  function sum(a) {
      return a;
  }

  console.clear()
  

//   addName(2000, 'Sheliza')
//     .then(()=>addName(2000,'lusi'))
//     .then(()=>addName(2000, 'johny '))
//     .then(()=>addName(2000, 'Doe lulo'))
//     .then(()=>addName(2000, 'Sarah'))
//     .catch((err)=>console.log(err))
//     console.log(" kha");
    sumPromise(3).then(data=>{
        console.log('dataPROMISE==>',data);
    }).catch(e=>{
        console.log(e);
    });

    const data = sum(1);
    console.log('data==>',data);

    function name(params) {
        
    }

    const name = (params)=>{

    }