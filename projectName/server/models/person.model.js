const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema(
    {
        firstName:{type:String},
    lastName:{type:String},
    },
    {timestamps:true}
    );

    module.exportsPerson=mongoose.model('Person', PersonSchema)