/**
 * @file Type Tests - Initializer
 * @module mark/parse/types/tests/unit-d/Initializer
 */

import type {
  Effects,
  State,
  TokenizeContext
} from '@flex-development/mark/parse'
import type TestSubject from '../initializer.mts'

describe('unit-d:types/Initializer', () => {
  it('should match [this: TokenizeContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<TokenizeContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Effects]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Effects]>()
    })
  })

  describe('returns', () => {
    it('should return State', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<State>()
    })
  })
})
