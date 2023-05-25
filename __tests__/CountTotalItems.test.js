/**
 * @jest-environment jsdom
*/

import { countTotalItem } from '../src/modules/CountTotalItems.js';

describe('Button Generator Function', () => {
  const wapper = document.createElement('div');
  const inner = document.createElement('div');
  const inner2 = document.createElement('div');

  test('No inner Child', () => {
    expect(countTotalItem(wapper)).toBe(0);
  });

  test('One Inner Child', () => {
    wapper.appendChild(inner);
    expect(countTotalItem(wapper)).toBe(1);
  });

  test('One Nested Inner Child', () => {
    inner.appendChild(inner2);
    wapper.appendChild(inner);
    expect(countTotalItem(wapper)).toBe(1);
  });

});