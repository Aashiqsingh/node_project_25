const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hordingSchema = new Schema({
    hoardingDimension:{
        type: String,
        required: true
    },
    hoardingType:{
        enum: ['Unipole', 'Billboard', 'Gantry', 'Digital'],
        required: true,
        type: String
    },
    Availablity_Status:{
        type:Boolean,
        required: true,
        default: true
    },
    hourlyRate:{
        type: Number,
        required: true
    },
    hordingURL:{
        type: String,
        required: true
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref: 'state'
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref: 'city'
    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref: 'area'
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('hording',hordingSchema);