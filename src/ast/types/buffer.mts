/**
 * @file Type Aliases - Buffer
 * @module fsm/ast/types/Buffer
 */

import type { CompileContext } from '@flex-development/fsm/ast'

/**
 * Capture some of the output data.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {undefined}
 */
type Buffer = (this: CompileContext) => undefined

export type { Buffer as default }
