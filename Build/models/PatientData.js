const mongoose = require('mongoose');

const pdata = new mongoose.Schema({

    PatientName:{

        require:true,
        type:String,
    },

    Age:{

        require:true,
        type:String,
    },

    Contact:{

        require:true,
        type:String,
    },

    Symptoms:{

        require:true,
        type:String,
    },

    Duration:{

        require:true,
        type:String,
    },

    HospitalName:{

        require:true,
        type:String,
    },

    DoctorName:{

        require:true,
        type:String,
    },

    Specialization:{

        require:true,
        type:String,
    },

    Date:{

        require:true,
        type:String,
    },

    BloodGroup:{

        require:true,
        type:String,
    },
})


const PatientInformation = new mongoose.model('PatientInformation',pdata);

module.exports = PatientInformation;