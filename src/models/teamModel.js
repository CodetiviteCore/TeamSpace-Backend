const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teamSchema = new Schema ({

    name:{
        type: String,
        required: [ true, "Please Include the team name" ],
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    category: {
      type: Schema.Types.ObjectId, 
      ref: "Category",
      required: true,
      trim: true
    },
    members: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
      type: string,
      required: true,
      trim: true

    },
    createdAt: {
    type: Date,
    default: Date.now,
  }

});

module.exports = mongoose.model("Team", teamSchema);