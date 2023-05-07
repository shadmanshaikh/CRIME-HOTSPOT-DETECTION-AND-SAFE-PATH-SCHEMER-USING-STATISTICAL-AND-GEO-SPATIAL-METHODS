import IrisDataset from 'ml-dataset-iris';
import { RandomForestClassifier as RFClassifier } from 'ml-random-forest';

const trainingSet = IrisDataset.getNumbers();
const predictions = IrisDataset.getClasses().map((elem) =>
  IrisDataset.getDistinctClasses().indexOf(elem)
);

const options = {
  seed: 3,
  maxFeatures: 0.8,
  replacement: true,
  nEstimators: 25
};

const classifier = new RFClassifier(options);
classifier.train(trainingSet, predictions);
const result = classifier.predict(trainingSet);
const oobResult = classifier.predictOOB();
const confusionMatrix = classifier.getConfusionMatrix();
console.log(oobResult)