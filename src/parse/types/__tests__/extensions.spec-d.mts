/**
 * @file Type Tests - Extensions
 * @module fsm/parse/types/tests/unit-d/Extensions
 */

import type { List } from '@flex-development/fsm/core'
import type { Extension } from '@flex-development/fsm/parse'
import type TestSubject from '../extensions.mts'

describe('unit-d:types/Extensions', () => {
  it('should extract Extension', () => {
    expectTypeOf<TestSubject>().extract<Extension>().not.toBeNever()
  })

  it('should extract List<Extension>', () => {
    expectTypeOf<TestSubject>().extract<List<Extension>>().not.toBeNever()
  })
})
