/**
 * @file Type Tests - Numeric
 * @module mark/core/types/tests/unit-d/Numeric
 */

import type TestSubject from '../numeric.mts'

describe('unit-d:types/Numeric', () => {
  it('should equal `${number}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`${number}`>()
  })
})
