const mongoose = require('mongoose');

const autoDetect = new mongoose.Schema({

    PatientName:{

        require:true,
        type:String,
    },

    PatientAge:{

        require:true,
        type:String,
    },


    Symptoms:{

        require:true,
        type:String,
    },

    Contact:{

        require:true,
        type:String,
    },
})


const Auto = new mongoose.model('Auto',autoDetect)

module.exports = Auto;