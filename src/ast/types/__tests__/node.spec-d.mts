/**
 * @file Type Tests - Node
 * @module fsm/ast/types/tests/unit-d/Node
 */

import type { NodeMap } from '@flex-development/fsm/ast'
import type TestSubject from '../node.mts'

describe('unit-d:types/Node', () => {
  it('should equal NodeMap[keyof NodeMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NodeMap[keyof NodeMap]>()
  })
})
