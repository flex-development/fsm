/**
 * @file Type Tests - InitialConstruct
 * @module mark/parse/interfaces/tests/unit-d/InitialConstruct
 */

import type { Construct, Initializer } from '@flex-development/mark/parse'
import type TestSubject from '../initial-construct.mts'

describe('unit-d:interfaces/InitialConstruct', () => {
  it('should extend Construct', () => {
    expectTypeOf<TestSubject>().toExtend<Construct>()
  })

  it('should match [tokenize: Initializer]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tokenize')
      .toEqualTypeOf<Initializer>()
  })
})
