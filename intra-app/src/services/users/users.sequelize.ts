
/* tslint:disable:quotemark */
// Defines Sequelize model for service `users`. (Can be re-generated.)
// TODO Fix ts
// @ts-ignore
import merge from 'lodash.merge';
// @ts-ignore
import Sequelize, { DefineAttributes } from 'sequelize';
// tslint:disable-next-line:no-unused-variable
const DataTypes = (Sequelize as any).DataTypes as Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

// Your model may need the following fields:
//   email:      { type: DataTypes.STRING, allowNull: false, unique: true },
//   password:   { type: DataTypes.STRING, allowNull: false },
let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.TEXT
    },
    personalPhoneNb: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    homePhoneNb: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addressId: {
      type: DataTypes.INTEGER
    }
  } as DefineAttributes,
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
