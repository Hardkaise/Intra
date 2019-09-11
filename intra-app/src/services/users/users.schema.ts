
// Define the Feathers schema for service `users`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Users',
  description: 'Users database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'email',
    'firstName',
    'lastName',
    'password',
    'personalPhoneNb',
    'homePhoneNb',
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    _id: { type: 'ID' },
    email: {
      type: 'string',
      unique: true,
    },
    password: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    dateOfBirth: { type: 'string' },
    personalPhoneNb: { type: 'string' },
    homePhoneNb: { type: 'string' },
    addressId: { type: 'ID' },
    gradesID: { type: 'array', items: { type: 'ID' }},
    roles: {
      type: 'array',
      default: [ 'student' ],
      items: {
        type: 'string',
        enum: ['admin', 'teacher', 'parent', 'student' ]
      }
    },
    // !end
  },
  // !code: schema_more // !end
};

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'User',
    service: {
      sort: { _id: 1 },
    },
    // sql: {
    //   sqlTable: 'Users',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !code: graphql_add
    //  grades: { type: '[Grade!]', args: true, relation: { ourTable: 'gradeID', otherTable: '_id'}}
      // !end
    },
    // !code: graphql_more // !end
  },
};

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
