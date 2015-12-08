var mongoose = require('mongoose');

var objectId = mongoose.Schema.Types.Objectid;

var objectsHold = new mongoose.Schema({
    containerId: mongoose.Schema.Types.ObjectId, 
    dateVisited: Date
  });

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  holding: [objectsHold],
  cellId: mongoose.Schema.Types.ObjectId 
}); 

UserSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
            name: ret.name,
            cellId: ret.cellId
        };
        return returnJson;
    }
});


module.exports = mongoose.model('People', UserSchema);
