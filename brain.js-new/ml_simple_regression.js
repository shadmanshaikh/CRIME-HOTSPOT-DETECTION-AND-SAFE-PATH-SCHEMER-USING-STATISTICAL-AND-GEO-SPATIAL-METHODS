// const regress = require('ml-regression-simple-linear');
import SimpleLinearRegression from 'ml-regression-simple-linear';


const x = [0.5, 1, 1.5, 2, 2.5];
const y = [0, 1, 2, 3, 4];

const regression = new SimpleLinearRegression(x,y);
const json = regression.toJSON();
// { name: 'simpleLinearRegression', slope: 2, intercept: -1 }
const loaded = SimpleLinearRegression.load(json);
console.log(loaded.predict(5)) // 9