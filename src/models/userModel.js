"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require("mongoose");

const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email field must be required!"],
      unique: true,
      trim: true,
      validate: [(email) => {}],
    },

    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => passwordEncrypt(password),
    },

    firstName: String,
    lastName: String,
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
