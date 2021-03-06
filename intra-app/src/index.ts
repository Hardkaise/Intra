
/* tslint:disable no-console */
// Start the server. (Can be re-generated.)
// !code: preface // !end
import logger from './logger';
import app from './app';
import seedData from './seed-data';
// !code: imports // !end
// !code: init // !end

const port = app.get('port');
const server = app.listen(port);
// !code: init2 // !end

process.on('unhandledRejection', (reason, p) => {
  // !<DEFAULT> code: unhandled_rejection_log
  logger.error('Unhandled Rejection at: Promise ', p, reason);
  // !end
  // !code: unhandled_rejection // !end
});

server.on('listening', async () => {
  // !<DEFAULT> code: listening_log
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
  // !end
  // !code: listening // !end
  await seedData(app);

  const graphql = app.service('graphql');
  const myQuery = `
  {
  findUser(query: {}) {
    firstName
    lastName
    email
  }
  }
`;

  graphql.find({ query: { query: myQuery } })
  // tslint:disable-next-line:no-console
    .then(result => console.log(result));
  // !code: listening1 // !end
});

// !code: funcs // !end
// !code: end // !end
