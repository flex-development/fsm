/**
 * @file Type Tests - Tree
 * @module fsm/ast/types/tests/unit-d/Tree
 */

import type { Node, Root } from '@flex-development/fsm/ast'
import type TestSubject from '../tree.mts'

describe('unit-d:types/Tree', () => {
  it('should equal Extract<Node, Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Extract<Node, Root>>()
  })
})
