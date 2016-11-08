var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/librarystoredb');
//mongod --dbpath ~/projs/LibrarySystem/LibrarySystem/data

var uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/librarystoredb';
 
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});
