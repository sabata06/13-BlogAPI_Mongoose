"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email field must be required!"],
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    firstName: String,
    lastName: String,
  },
  { collection: "users", timestamps: true }
);
