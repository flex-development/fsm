/**
 * @file Type Tests - Enter
 * @module fsm/ast/types/tests/unit-d/Enter
 */

import type {
  CompileContext,
  Node,
  OnEnterError
} from '@flex-development/fsm/ast'
import type { Token } from '@flex-development/fsm/parse'
import type TestSubject from '../enter.mts'

describe('unit-d:types/Enter', () => {
  it('should match [this: CompileContext]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<CompileContext>()
  })

  describe('parameters', () => {
    it('should be callable with [Node, Token, (OnEnterError | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[Node, Token, (OnEnterError | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
