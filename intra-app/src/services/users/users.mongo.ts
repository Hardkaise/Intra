
/* tslint:disable:quotemark */
// Defines the MongoDB $jsonSchema for service `users`. (Can be re-generated.)
import { merge } from 'lodash';
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
      email: {
        unique: true,
        bsonType: "string"
      },
      password: {
        bsonType: "string"
      },
      firstName: {
        bsonType: "string"
      },
      lastName: {
        bsonType: "string"
      },
      dateOfBirth: {
        bsonType: "string"
      },
      personalPhoneNb: {
        bsonType: "string"
      },
      homePhoneNb: {
        bsonType: "string"
      },
      addressId: {
        bsonType: "objectId"
      },
      roles: {
        default: [
          "student"
        ],
        items: {
          type: "string",
          enum: [
            "admin",
            "teacher",
            "parent",
            "student"
          ]
        },
        bsonType: "array"
      }
    },
    required: [
      "email",
      "firstName",
      "lastName",
      "password",
      "personalPhoneNb",
      "homePhoneNb",
      "roles"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
