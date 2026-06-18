/**
 * @file Type Tests - Encoding
 * @module mark/parse/types/tests/unit-d/Encoding
 */

import type { EncodingMap } from '@flex-development/mark/parse'
import type TestSubject from '../encoding.mts'

describe('unit-d:types/Encoding', () => {
  it('should equal EncodingMap[keyof EncodingMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<EncodingMap[keyof EncodingMap]>()
  })
})
