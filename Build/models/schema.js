const mongoose = require('mongoose')
const validator = require('validator')


const info = new mongoose.Schema({

    first_name:{

        type:String,
        required:true,
        maxlength:100,
        
    },
    
    last_name:{

        require:true,
        maxlength:100,
        type:String,
    },

    email:{

        require:true,
        type:String,
    },

    password:{

        require:true,
        type:String,
        validate:{

            validator : function (value){

                return /[0-9]/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value);
            },
            
            message:"password should contain atleast 1 number and 1 special character"
        },
    },

    contact:{

        require:true,
        type:Number,
    }

})

const User = new mongoose.model('User',info)

module.exports = User