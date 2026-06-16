/**
 * @file Type Tests - CreateExtensions
 * @module fsm/ast/types/tests/unit-d/CreateExtensions
 */

import type {
  Buffer,
  Closer,
  Extension,
  Opener
} from '@flex-development/fsm/ast'
import type { List } from '@flex-development/fsm/core'
import type TestSubject from '../create-extensions.mts'

describe('unit-d:types/CreateExtensions', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Opener, Closer, Buffer]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Opener, Closer, Buffer]>()
    })
  })

  describe('returns', () => {
    it('should return Extension | List<Extension>', () => {
      expectTypeOf<TestSubject>()
        .returns
        .toEqualTypeOf<Extension | List<Extension>>()
    })
  })
})
