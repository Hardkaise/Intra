
/* tslint:disable:quotemark */
// Defines Sequelize model for service `grades`. (Can be re-generated.)
import merge from 'lodash.merge';
import Sequelize, { DefineAttributes } from 'sequelize';
// tslint:disable-next-line:no-unused-variable
const DataTypes = (Sequelize as any).DataTypes as Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxGrade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    teacherID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  } as DefineAttributes,
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
