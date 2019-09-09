
/* tslint:disable:quotemark */
// Defines the MongoDB $jsonSchema for service `grades`. (Can be re-generated.)
import merge from 'lodash.merge';
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      grade: {
        bsonType: "int"
      },
      maxGrade: {
        bsonType: "int"
      },
      comment: {
        bsonType: "string"
      },
      date: {
        bsonType: "string"
      },
      teacherID: {
        bsonType: "objectId"
      }
    },
    required: [
      "grade",
      "maxGrade",
      "comment",
      "date",
      "teacherID"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
