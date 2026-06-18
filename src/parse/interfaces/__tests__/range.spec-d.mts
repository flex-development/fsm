/**
 * @file Type Tests - Range
 * @module mark/parse/interfaces/tests/unit-d/Range
 */

import type { RangeInfo } from '@flex-development/mark/parse'
import type TestSubject from '../range.mts'

describe('unit-d:interfaces/Range', () => {
  it('should match [end: RangeInfo]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<RangeInfo>()
  })

  it('should match [start: RangeInfo]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('start')
      .toEqualTypeOf<RangeInfo>()
  })
})
