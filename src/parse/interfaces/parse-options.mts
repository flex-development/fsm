/**
 * @file Interfaces - ParseOptions
 * @module fsm/parse/interfaces/ParseOptions
 */

import type { Extensions } from '@flex-development/fsm/parse'

/**
 * Configuration object defining how to parse.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/parse' {
 *    interface ParseOptions {
 *      from?: Point | null | undefined
 *    }
 *  }
 */
interface ParseOptions {
  /**
   * The syntax extension, or the list of syntax extensions.
   *
   * @see {@linkcode Extensions}
   */
  extensions?: Extensions | null | undefined
}

export type { ParseOptions as default }
