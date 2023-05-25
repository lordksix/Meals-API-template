/**
 * @jest-environment jsdom
*/

import { countTotalItem } from '../src/modules/CountTotalItems.js';

describe('Button Generator Function', () => {
  const wapper = document.createElement('div');
  test('No inner Child', () => {
    expect(countTotalItem(wapper)).toBe(0);
  });
});