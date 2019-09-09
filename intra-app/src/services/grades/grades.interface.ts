
// Define TypeScript interface for service `grades`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-empty-interface
export interface GradeBase {
  // !<DEFAULT> code: interface
  _id: unknown;
  grade: number;
  maxGrade: number;
  comment: string;
  date: string;
  teacherID: unknown;
  // !end
}

// tslint:disable-next-line:no-empty-interface
export interface Grade extends GradeBase {
  // !<DEFAULT> code: more
  _id: any; // change if needed
  teacherID: any; // change if needed
  // !end
}

// !code: funcs // !end
// !code: end // !end
