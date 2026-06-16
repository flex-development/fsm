/**
 * @file Type Tests - CreateNode
 * @module fsm/ast/types/tests/unit-d/CreateNode
 */

import type { Node } from '@flex-development/fsm/ast'
import type { Token } from '@flex-development/fsm/parse'
import type TestSubject from '../create-node.mts'

describe('unit-d:types/CreateNode', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [Token<T>]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[Token]>()
    })
  })

  describe('returns', () => {
    it('should return N', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Node>()
    })
  })
})
