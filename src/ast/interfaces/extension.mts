/**
 * @file Interfaces - Extension
 * @module fsm/ast/interfaces/Extension
 */

import type { Handles, Transform } from '@flex-development/fsm/ast'
import type * as compile from '@flex-development/fsm/compile'
import type { List } from '@flex-development/fsm/core'

/**
 * An event compilation extension.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/ast' {
 *    interface Extension {
 *      canContainEols?: string[] | null | undefined
 *    }
 *  }
 *
 * @see {@linkcode compile.Extension}
 *
 * @extends {compile.Extension}
 */
interface Extension extends compile.Extension {
  /**
   * Record, where each key is a token type
   * and each value is the handler to call when entering a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  enter?: Handles | null | undefined

  /**
   * Record, where each key is a token type
   * and each value is the handler to call when exiting a token.
   *
   * @see {@linkcode Handles}
   *
   * @override
   */
  exit?: Handles | null | undefined

  /**
   * The list of transforms to apply.
   *
   * Transforms are applied to the final compilation result.
   *
   * @see {@linkcode List}
   * @see {@linkcode Transform}
   *
   * @override
   */
  transforms?: List<Transform> | null | undefined
}

export type { Extension as default }
