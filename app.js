var Engine = require('tingodb')();
var database = new Engine.Db(__dirname + '/db',{});
var sampleCollection = database.collection('somestuff');
sampleCollection.insert({
   "sensorvalue" : Math.random() * 100,
   "datetime" : new Date()
});