
/* tslint:disable:quotemark */
// Defines Mongoose model for service `users`. (Can be re-generated.)
import merge from 'lodash.merge';
// tslint:disable-next-line:no-unused-variable
import mongoose from 'mongoose';
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dateOfBirth: String,
    personalPhoneNb: {
      type: String,
      required: true
    },
    homePhoneNb: {
      type: String,
      required: true
    },
    addressId: mongoose.Schema.Types.ObjectId,
    roles: {
      type: [ String ],
      enum: ['admin', 'teacher', 'parent', 'student'],
      default: ['student']
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
