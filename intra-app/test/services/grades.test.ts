/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'grades\' service', () => {
  it('registered the service', () => {
    const service = app.service('grades');

    assert.ok(service, 'Registered the service');
  });
});
