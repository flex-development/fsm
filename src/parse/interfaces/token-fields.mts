/**
 * @file Interfaces - TokenFields
 * @module mark/parse/interfaces/TokenFields
 */

import type { ContentType, Context, Token } from '@flex-development/mark/parse'

/**
 * Registry of token fields.
 *
 * This interface can be augmented to register custom token fields.
 *
 * @example
 *  declare module '@flex-development/mark/parse' {
 *    interface TokenFields {
 *      value?: string | null
 *    }
 *  }
 */
interface TokenFields {
  /**
   * The connected tokenizer.
   *
   * Typically used when dealing with linked tokens; a child tokenizer is
   * usually needed to tokenize them.
   *
   * @see {@linkcode Context}
   */
  _tokenizer?: Context | null | undefined

  /**
   * Declare the token as having content of a certain type.
   *
   * @see {@linkcode ContentType}
   */
  contentType?: ContentType | null | undefined

  /**
   * The next token.
   *
   * @see {@linkcode Token}
   */
  next?: Token | null | undefined

  /**
   * The previous token.
   *
   * @see {@linkcode Token}
   */
  previous?: Token | null | undefined
}

export type { TokenFields as default }
