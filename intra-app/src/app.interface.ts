
// Application interface. (Can be re-generated.)
import { Application } from '@feathersjs/express';
import { Grade } from './services/grades/grades.interface';
import { User } from './services/users/users.interface';
import {ServiceAddons} from '@feathersjs/feathers';
// !code: imports // !end
// !code: init // !end

/*
  You can (but don't need to) specify your services' data types in here.
  If you do, TypeScript can infer the return types of service methods.

  example:

  export type App = Application<{users: User}>;

  app.service('users').get(1).then(user => {
    user = 5; // this won't compile, because user is known to be of type User
  });
 */
export type App = Application<{
  'grades': Grade,
  'users': User,
  'authentication': ServiceAddons<any>
  // !code: moduleExports // !end
}>;
// !code: funcs // !end
// !code: end // !end
