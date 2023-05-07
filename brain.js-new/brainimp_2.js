const brain = require('brain.js');
// var neuron = require('neuro.js');
// import brain from 'brain.js';
const net = new brain.NeuralNetwork();

var  data=  [
    {'lati': 77.249200000000002, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.536300000000001}, {'lati': 77.085999999999999, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.6127}, {'lati': 77.2042, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.529900000000001}, {'lati': 77.236099999999993, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.643599999999999}, {'lati': 77.193700000000007, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.7026}, {'lati': 77.293700000000001, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.653400000000001}, {'lati': 77.226200000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.666399999999999}, {'lati': 77.265299999999996, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.5307}, {'lati': 77.066199999999995, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.609100000000002}, {'lati': 77.267600000000002, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.5623}, {'lati': 77.306200000000004, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.523}, {'lati': 77.224199999999996, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.7072}, {'lati': 77.003600000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.7258}, {'lati': 77.1738, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.66}, {'lati': 77.086399999999998, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5914}, {'lati': 77.127600000000001, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.7179}, {'lati': 77.179000000000002, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.570499999999999}, {'lati': 77.115899999999996, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.702400000000001}, {'lati': 77.132800000000003, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.674399999999999}, {'lati': 77.015600000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.6037}, {'lati': 77.197400000000002, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.736599999999999}, {'lati': 77.233599999999996, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.652799999999999}, {'lati': 77.175299999999993, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.709800000000001}, {'lati': 77.196100000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.603400000000001}, {'lati': 77.302599999999998, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.6204}, {'lati': 77.088800000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.679600000000001}, {'lati': 77.1511, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.465499999999999}, {'lati': 77.217500000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.649799999999999}, {'lati': 77.119900000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.639700000000001}, {'lati': 77.174899999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.733599999999999}, {'lati': 77.226200000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.643000000000001}, {'lati': 77.224999999999994, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.6309}, {'lati': 77.204899999999995, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.569299999999998}, {'lati': 77.208600000000004, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.700199999999999}, {'lati': 77.292199999999994, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.668800000000001}, {'lati': 77.257400000000004, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.533200000000001}, {'lati': 77.256399999999999, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5473}, {'lati': 77.180499999999995, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6478}, {'lati': 77.240499999999997, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.587399999999999}, {'lati': 77.144999999999996, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.630800000000001}, {'lati': 77.274600000000007, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.526800000000001}, {'lati': 77.142200000000003, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.725200000000001}, {'lati': 76.915599999999998, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.595700000000001}, {'lati': 77.120800000000003, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6266}, {'lati': 77.0608, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.709599999999998}, {'lati': 77.101900000000001, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.710000000000001}, {'lati': 77.240899999999996, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.559100000000001}, {'lati': 77.139099999999999, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.798999999999999}, {'lati': 77.164199999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.7258}, {'lati': 77.1524, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5349}, {'lati': 77.165700000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.742899999999999}, {'lati': 77.042500000000004, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.796500000000002}, {'lati': 77.0518, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.724499999999999}, {'lati': 77.137799999999999, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.633600000000001}, {'lati': 77.214299999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.498899999999999}, {'lati': 77.1828, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.635000000000002}, {'lati': 77.1571, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.716799999999999}, {'lati': 77.159800000000004, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.684200000000001}, {'lati': 77.119299999999996, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.697800000000001}, {'lati': 77.208500000000001, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.665400000000002}, {'lati': 77.214299999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.629999999999999}, {'lati': 77.244200000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.592400000000001}, {'lati': 77.240600000000001, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.6419}, {'lati': 77.0916, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.6966}, {'lati': 77.306600000000003, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.666799999999999}, {'lati': 77.218800000000002, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.6556}, {'lati': 77.078599999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.7026}, {'lati': 77.276399999999995, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.6554}, {'lati': 77.221500000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.688500000000001}, {'lati': 77.174300000000002, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.692399999999999}, {'lati': 77.101399999999998, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.638999999999999}, {'lati': 77.082899999999995, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.588100000000001}, {'lati': 77.146600000000007, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.6601}, {'lati': 77.099500000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.609400000000001}, {'lati': 77.209299999999999, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.645800000000001}, {'lati': 77.211200000000005, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.654}, {'lati': 77.199100000000001, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5745}, {'lati': 76.982699999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6098}, {'lati': 77.087199999999996, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.529599999999999}, {'lati': 77.317099999999996, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.613600000000002}, {'lati': 77.303600000000003, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.4938}, {'lati': 77.144099999999995, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.689}, {'lati': 77.207700000000003, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.6692}, {'lati': 77.206500000000005, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.692499999999999}, {'lati': 77.203199999999995, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.6386}, {'lati': 77.211200000000005, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.598299999999998}, {'lati': 77.240499999999997, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5684}, {'lati': 77.280699999999996, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.667000000000002}, {'lati': 77.233699999999999, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.604199999999999}, {'lati': 77.313100000000006, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.655999999999999}, {'lati': 77.156199999999998, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.758400000000002}, {'lati': 77.232799999999997, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.554099999999998}, {'lati': 77.068299999999994, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.629999999999999}, {'lati': 77.064899999999994, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.625}, {'lati': 77.233400000000003, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.564699999999998}, {'lati': 77.292400000000001, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.562100000000001}, {'lati': 77.231499999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.662500000000001}, {'lati': 77.290999999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.5016}, {'lati': 77.281999999999996, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.540500000000002}, {'lati': 77.066999999999993, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.681999999999999}, {'lati': 77.198599999999999, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.558499999999999}, {'lati': 77.225499999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6434}, {'lati': 77.066699999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.578399999999998}, {'lati': 77.101200000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.671099999999999}, {'lati': 77.067400000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6205}, {'lati': 77.235399999999998, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.618200000000002}, {'lati': 77.119600000000005, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.651499999999999}, {'lati': 77.242999999999995, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.509599999999999}, {'lati': 77.303700000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.607299999999999}, {'lati': 77.078900000000004, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.747699999999998}, {'lati': 77.267300000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.659600000000001}, {'lati': 77.058499999999995, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5641}, {'lati': 77.158699999999996, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.647500000000001}, {'lati': 77.036000000000001, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.6538}, {'lati': 77.227199999999996, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.5288}, {'lati': 77.270300000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.637799999999999}, {'lati': 77.295299999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.638500000000001}, {'lati': 77.135099999999994, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.640499999999999}, {'lati': 77.208500000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.549399999999999}, {'lati': 77.022800000000004, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.8066}, {'lati': 77.120999999999995, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.730399999999999}, {'lati': 77.247200000000007, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.627400000000002}, {'lati': 77.225099999999998, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.575900000000001}, {'lati': 77.124399999999994, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.598700000000001}, {'lati': 77.193299999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6526}, {'lati': 77.113299999999995, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.657599999999999}, {'lati': 77.283900000000003, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.643599999999999}, {'lati': 77.158199999999994, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6524}, {'lati': 77.169300000000007, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.558}, {'lati': 77.193200000000004, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.6526}, {'lati': 77.260199999999998, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.578399999999998}, {'lati': 77.088499999999996, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.853200000000001}, {'lati': 77.311800000000005, 'type': 'Feature', 'properties': {'mag': 4}, 'longi': 28.598199999999999}, {'lati': 77.213700000000003, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.624700000000001}, {'lati': 77.071700000000007, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.664999999999999}, {'lati': 77.306100000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.625399999999999}, {'lati': 77.1785, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.680599999999998}, {'lati': 77.306100000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.625399999999999}, {'lati': 76.966800000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.628699999999998}, {'lati': 76.994699999999995, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.5869}, {'lati': 77.180199999999999, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.5215}, {'lati': 77.146000000000001, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.700399999999998}, {'lati': 77.081900000000005, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.628599999999999}, {'lati': 77.183700000000002, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.668399999999998}, {'lati': 77.192599999999999, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.670000000000002}, {'lati': 77.202600000000004, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.684999999999999}, {'lati': 77.152299999999997, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.5349}, {'lati': 77.118200000000002, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.7089}, {'lati': 77.332700000000003, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.6249}, {'lati': 77.316500000000005, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.678100000000001}, {'lati': 77.268600000000006, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.674299999999999}, {'lati': 77.298599999999993, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.6828}, {'lati': 77.285200000000003, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.674199999999999}, {'lati': 77.256100000000004, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.711099999999998}, {'lati': 77.291700000000006, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.696100000000001}, {'lati': 77.3185, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.706}, {'lati': 76.960800000000006, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.670400000000001}, {'lati': 77.264399999999995, 'type': 'Feature', 'properties': {'mag': 3}, 'longi': 28.7013}, {'lati': 77.272999999999996, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.679099999999998}, {'lati': 77.274799999999999, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.673400000000001}, {'lati': 77.308199999999999, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.698499999999999}, {'lati': 77.316000000000003, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.684999999999999}, {'lati': 77.262100000000004, 'type': 'Feature', 'properties': {'mag': 0}, 'longi': 28.672000000000001}, {'lati': 77.256100000000004, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.711300000000001}, {'lati': 77.274500000000003, 'type': 'Feature', 'properties': {'mag': 2}, 'longi': 28.732800000000001}, {'lati': 77.280799999999999, 'type': 'Feature', 'properties': {'mag': 1}, 'longi': 28.702200000000001}
  ];

// console.log(data[9].properties.mag);

var maxval = 0;
for( var i = 0 ; i < data.length ; i++){
    if(data[i].longi > maxval){
        maxval = data[i].longi;
    }
}
// console.log("the max value is : " ,maxval)

var propertiesMagMax = 4;
var latiMax = 77.3327;
var longiMax = 28.8532;
for(var i = 0 ;i < data.length ; i++){
    data[i].lati = data[i].lati / latiMax;
    data[i].long = data[i].longi / longiMax;
    data[i].properties.mag = data[i].properties.mag / propertiesMagMax;
}
// // console.log(data[20].lati)
const training_data = data.map(item =>({
    input : [item.lati , item.longi],
    output : [item.properties.mag]
}));

net.train(
    training_data , {
        iterations:10000
    }
)

let res = net.run([data[54].lati , data[54].longi]);
var weight = Math.floor(Math.random() * 5);
console.log("the probability of danger of the route is :" , res * weight);

// document.get
// document.getElementById("result").innerHTML = res;

if(typeof document !== 'undefined'){
    let ele = document.querySelector('result');
    ele.innerHTML = "hello";
}

if(process.browser){
    console.log("the process is running in browser");
}else{
    console.log("the process is running in node JS");
}



// console.log(Math.floor(Math.random() * 5));
// var neuron = require("neuro.js");
// const neuro = require('../dist/index.umd.js');
// const neuron = require('neuro.umd.js');
// import neuron from 'neuro.js';
// var mywinnow = neuron.classifiers.Winnow.bind(0 , {retrain_count : 10});

// var intentClassifier = new neuron.classifiers.multilabel.BinaryRelevance({
//     binaryClassifierType : mywinnow
// });


// // intentClassifier.trainBatch([
// //     training_data
// // ]);

// // console.dir(

// //     intentClassifier.classify([data[34].lati , data[34].longi])
// // )

// const training_data = data.map(item =>({
//     input : [item.lati , item.longi],
//     output : [item.properties.mag]
// }));

// intentClassifier.trainBatch([
//     training_data
// ]);
  
// console.dir(

//     intentClassifier.classify([data[34].lati , data[34].longi])
// );
//   console.dir(
//     intentClassifier.classify({
//       I: 1,
//       want: 1,
//       an: 1,
//       apple: 1,
//       and: 1,
//       a: 1,
//       banana: 1
//     })
//   ); // ['APPLE','BANANA']