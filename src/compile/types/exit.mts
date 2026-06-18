/**
 * @file Type Aliases - Exit
 * @module mark/compile/types/Exit
 */

import type {
  CompileContext,
  OnExitError
} from '@flex-development/mark/compile'
import type { Token } from '@flex-development/mark/parse'

/**
 * Exit a compilation value.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode OnExitError}
 * @see {@linkcode Token}
 *
 * @this {CompileContext}
 *
 * @param {Token} token
 *  The token associated with the compilation value
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
