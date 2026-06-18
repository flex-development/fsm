/**
 * @file Type Aliases - Exit
 * @module mark/ast/types/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/mark/ast'
import type { Token } from '@flex-development/mark/parse'

/**
 * Exit a node.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode OnExitError}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The token associated with the node
 * @param {OnExitError | null | undefined} [onError]
 *  Handle the case where another token is open
 * @return {undefined}
 */
type Exit = (
  this: CompileContext,
  token: Token,
  onError?: OnExitError | null | undefined
) => undefined

export type { Exit as default }
