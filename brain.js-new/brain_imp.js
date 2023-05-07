// const brain = require('brain.js');
import brain from 'brain.js';
import data from './crime.json' assert {type : 'json'};
// import { json } from 'body-parser';

// import brain from 'brain.js';

const net = new brain.NeuralNetwork();
// import * as brain from 'brain.js';
// const net = require('network')
// const data = require('./crime.json')

// import data from './crime.json' assert {type : "json"};
// console.log(data[1].totalcrime) ;


//getting max-value of the crime dataset to normalize the values between 0 and 1

// console.log(data[3].totalcrime)
// const totcrime = data[0].totalcrime / 1433.000000	;
// console.log(data.length)

let tot_crime;
for(var i =0 ;i<data.length;i++){
     data[i].totalcrime = data[i].totalcrime / 1433.000000;
     data[i].murder = data[i].murder / 10.000000;
     data[i].rape = data[i].rape / 43.000000;
     data[i].gangrape = data[i].gangrape / 6.000000;
     data[i].theft = data[i].theft / 1273.000000;
     data[i].long = data[i].long / 	77.332670;
     data[i].lat = data[i].lat / 28.853210;
     data[i].crime.area = data[i].crime.area /792.025514;


    // console.log(data[i].totalcrime);
 }
// console.log(data[4].totalcrime)
let maxval = 0;
// //     let obj ;
for(var i =0 ;i<data.length;i++){
        
        if(data[i].theft > maxval){
            maxval = data[i].theft;
            
        }
    }
// console.log(maxval)
// function fun(arr){
//     var maxValue = Number.MIN_VALUE;
 
//     for(var i=0;i<166;i++){
//         if(arr[i].a>maxValue){
//         maxValue = arr[i].a;
//     }
//     }
//     return maxValue;
// }
 let mymax;
for(var i=0;i<data.length;i++){
     mymax = Math.max(data[i].murder);
    // break;
    
}
// console.log(mymax);
// murdervalues = Math.max(data.murder)
// console.log(murdervalues);
// console.log(tot_crime)
// let arr = Object.values(data.murder)
// console.log(Object.values(data.murder));
const training_data = data.map(item =>({
    input: [item.murder , item.rape , item.gangrape , item.theft ,item.long ,item.lat ,item.totalcrime],
    output:[item.crime.area]
}));
// console.log(item.murder)
net.train(
    training_data , {
        iterations:2000
    }
    // {input: [data.murder,data.rape,data.gangrape] ,output:[data.totalcrime] }
        // for(var i ;)
    );

// const readline = require('readline-sync');

// let a = Number(readline.question());
console.log(data[21].crime.area);
console.log(data[35].murder ,data[35].rape , data[35].gangrape );
let res = net.run([0.2 ,0.20930232558139536 , 0 , data[36].theft,data[37].long , data[38].lat , data[24].totalcrime]) ;
// res.toFixed(2)
console.log(`The probability of crime taking place: ${(res * 100)}%`);
// fetch('./crime.json').then(res => res.json()).then(mydata => console.log(mydata))
var a =10.2322;
// console.log(parseFloat(a).toFixed(2));
// console.log(a)
// const obj = JSON.stringify(data)
// console.log(obj.murder[1])
// console.log(obj.)

// fetch('./crime.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const net = new brain.NeuralNetwork();

// net.train([
//    {input :[1,0,0] , output :[1] },
//    {input :[1,1,0] , output :[1] },
//    {input :[1,0,1] , output :[1] },
// //    {input :[1,0,1] , output :[1] },
//    {input :[0,1,0] , output :[0] },
//    {input :[0,1,0] , output :[0] },
//    {input :[0,0,1] , output :[0] },
//    {input :[0,1,1] , output :[0] },
// ])

// res = net.run([0,0,0])

// // console.log(" The result is  : " , res)
// if(res > 0.5){
//     console.log(`Its one and the probability is : ${res}`)
// }else{
//     console.log(`Its zero and the probability is : ${res}`)
// }
// console.log(`probability of getting one is :${res}`)