var mongoose = require('mongoose');

var CellSchema = mongoose.Schema({
  location: [Number, Number]
});

CellSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
          	location: ret.location
        };
        return returnJson;
    }
});

module.exports = mongoose.model('Cell', CellSchema);
