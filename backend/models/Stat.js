const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    typeTraining: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    owner: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
});


module.exports = model('Stat', schema);