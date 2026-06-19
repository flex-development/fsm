/**
 * @file Type Tests - ContextMap
 * @module mark/parse/interfaces/tests/unit-d/ContextMap
 */

import type TestSubject from '../context-map.mts'

describe('unit-d:interfaces/ContextMap', () => {
  it('should register tokenization contexts', () => {
    expectTypeOf<keyof TestSubject>().not.toBeNever()
  })
})
