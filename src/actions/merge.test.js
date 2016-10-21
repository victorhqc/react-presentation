import { assert } from 'chai';

import { mergeApp, MERGE_INIT } from './merge';

describe('Merge Actions', () => {
  it ('Should merge avocarrot & glispa', () => {
    const data = {
      message: 'Hello'
    };

    const expectedResponse = {
      type: MERGE_INIT,
      data
    };

    assert.deepEqual(expectedResponse, mergeApp(data));
  });
});
