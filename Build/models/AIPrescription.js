const mongoose = require('mongoose');


const pres = new mongoose.Schema({


    DiseaseName:{

        require:true,
        type:String,
    },


    SymptomsMatched:{

        require:true,
        type:String,
    },


    PossibleCause:{

        require:true,
        type:String,
    },

    RecommendedTests:{

        require:true,
        type:String,
    },
    
    Prescription:{

        require:true,
        type:String,
    },

    HomeRemedies:{

        require:true,
        type:String,
    },

    DoctorSpecialization:{

        require:true,
        type:String,
    },


})


const Prescription = new mongoose.model('Prescription',pres)

module.exports = Prescription;