
// tslint:disable:no-trailing-whitespace
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type Grade {
  _id: ID
  grade: Int!
  maxGrade: Int!
  comment: String!
  date: String!
  teacherID: ID!
}
 
type User {
  _id: ID
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  dateOfBirth: String
  personalPhoneNb: String!
  homePhoneNb: String!
  addressId: ID
  gradesID: [ID]
  roles: [String]
}
 

type Query {
  getGrade(key: JSON, query: JSON, params: JSON): Grade
  findGrade(query: JSON, params: JSON): [Grade]!
  getUser(key: JSON, query: JSON, params: JSON): User
  findUser(query: JSON, params: JSON): [User]!
}
`;

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
