const mongoose = require('mongoose');

const amb = new mongoose.Schema({

    PatientName:{

        require:true,
        type:String,
    },

    Cause:{

        require:true,
        type:String,
    },

    PickupLocation:{

        require:true,
        type:String,
    },

    PatientCondition:{

        require:true,
        type:String,
    },

    Contact:{

        require:true,
        type:String,
    },

})

const Myambu = new mongoose.model('Myambu',amb)

module.exports = Myambu;