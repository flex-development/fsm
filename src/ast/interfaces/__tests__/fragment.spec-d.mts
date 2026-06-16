/**
 * @file Type Tests - Fragment
 * @module fsm/ast/interfaces/tests/unit-d/Fragment
 */

import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../fragment.mts'

describe('unit-d:interfaces/Fragment', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toExtend<Parent>()
  })

  it('should match [children: Child[]]', () => {
    // Arrange
    type Child = Literal | Node | Parent

    // Expect
    expectTypeOf<TestSubject<Child>>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })

  it('should match [type: "fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'fragment'>()
  })
})
