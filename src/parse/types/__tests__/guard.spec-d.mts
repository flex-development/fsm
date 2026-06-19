/**
 * @file Type Tests - Guard
 * @module mark/parse/types/tests/unit-d/Guard
 */

import type { Code, Context } from '@flex-development/mark/parse'
import type TestSubject from '../guard.mts'

describe('unit-d:types/Guard', () => {
  it('should match [this: Context]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<Context>()
  })

  describe('parameters', () => {
    it('should be callable with [Code]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Code]>()
    })
  })

  describe('returns', () => {
    it('should return boolean', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<boolean>()
    })
  })
})
