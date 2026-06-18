/**
 * @file Type Aliases - Handle
 * @module mark/compile/types/Handle
 */

import type { CompileContext } from '@flex-development/mark/compile'
import type { Token, TokenType } from '@flex-development/mark/parse'

/**
 * Handle an event token.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T]
 *  The event token type
 *
 * @this {CompileContext}
 *
 * @param {Token<T>} token
 *  The event token
 * @return {undefined}
 */
type Handle<T extends TokenType = TokenType> = (
  this: CompileContext,
  token: Token<T>
) => undefined

export type { Handle as default }
