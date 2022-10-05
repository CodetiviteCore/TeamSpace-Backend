const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId


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
    members: [{
        type: ObjectId,
        ref: "User",
        required: true,
    }],
    },
    createdAt: {
    type: Date,
    default: Date.now,
  }

});

module.exports = mongoose.model("Team", teamSchema);