// const prompt2 = require('prompt2');
// const addTwonumber = (num1:number , numC:string , num2:number )=>{
   
//     if(numC=="+"){
//         return num1 + num2;
//     }
//     else if(numC=="-"){
//         return num1-num2;
//     }
//     else if(numC=="*"){
//         return num1 * num2;
//     }
//     else if(numC=="/"){
//         return num1 / num2;
//     }


// }


// const result =addTwonumber(10 , "*" , 2);
// const result2 =addTwonumber(10 , "+" , 2);
// const result3 =addTwonumber(10 , "-" , 2);
// const result4 =addTwonumber(10 , "/" , 2);
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// var prompt2 = require('prompt');

//   //
//   // Start the prompt
//   //
//   prompt2.start();

  //
  // Get two properties from the user: username and email
  //
  //first quest
  const prompt2 = require('prompt'); 
  prompt2.start(); 

  prompt2.get(['num1','Operation', 'num2'], function (err, result) {     
    if (result.Operation ==='+')
    {         console.log(Number(result.num1)+ Number(result.num2 ));      }
    if (result.Operation ==='-')
    {         console.log(Number(result.num1)- Number(result.num2 ));      } 
    if (result.Operation ==='*')
    {         console.log(Number(result.num1)* Number(result.num2 ));      }
    if (result.Operation ==='/')
    {         console.log(Number(result.num1)/ Number(result.num2 ));      }
    
     
  
  
  })
