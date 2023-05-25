/**
 * @jest-environment jsdom
*/

import { countTotalItem } from '../src/modules/CountTotalItems.js';

describe('Button Generator Function', () => {
  const wapper = document.createElement('section');
  const inner = document.createElement('div');
  const inner2 = document.createElement('p');
  const inner3 = document.createElement('span');

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

  test('Various Children', () => {
    inner.appendChild(inner2);
    wapper.appendChild(inner);
    wapper.appendChild(inner2);
    wapper.appendChild(inner3);

    expect(countTotalItem(wapper)).toBe(3);
  });
});
