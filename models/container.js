var mongoose = require('mongoose');
// var objectId = mongoose.Schema.Types.Objectid;
var Any = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });

var ContainerSchema = mongoose.Schema({ 
  position: {x: Number, y: Number, z: Number},  // X,Y,Z relative in the current cell
  items: [mongoose.Types.ObjectId],
  belongsTo: mongoose.Schema.Types.ObjectId,  // Only one 
  data: [{}],
  cellContained: mongoose.Schema.Types.ObjectId
});


ContainerSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
            location: ret.location,
            items: ret.items,
            belongsTo: ret.belongsTo,
            data: ret.data,
            cellContained: ret.cellContained
        };
        return returnJson;
    }
});

module.exports = mongoose.model('Container', ContainerSchema);
