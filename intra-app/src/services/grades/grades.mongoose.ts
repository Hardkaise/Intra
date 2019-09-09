
/* tslint:disable:quotemark */
// Defines Mongoose model for service `grades`. (Can be re-generated.)
import merge from 'lodash.merge';
// tslint:disable-next-line:no-unused-variable
import mongoose from 'mongoose';
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    grade: {
      type: Number,
      required: true
    },
    maxGrade: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    teacherID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
