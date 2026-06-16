/**
 * @file Type Tests - SerializeNode
 * @module fsm/ast/types/tests/unit-d/SerializeNode
 */

import type { Node } from '@flex-development/fsm/ast'
import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../serialize-node.mts'

describe('unit-d:types/SerializeNode', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Node | undefined]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Node | undefined]>()
    })
  })

  describe('returns', () => {
    it('should return string | null | undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Nilable<string>>()
    })
  })
})
