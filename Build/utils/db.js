const mongoose = require('mongoose');

try {
    
    if(mongoose.connect(process.env.MongodbURL))
    {
        console.log("Database Connected Successfully")
    }
} catch (error) {
    
    console.log("Database connection Error",error.name)
}