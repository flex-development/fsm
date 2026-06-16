/**
 * @file Type Aliases - Resume
 * @module fsm/ast/types/Resume
 */

import type { CompileContext } from '@flex-development/fsm/ast'

/**
 * Stop capturing output and serialize the captured node.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {string | null | undefined}
 *  The serialized node
 */
type Resume = (this: CompileContext) => string | null | undefined

export type { Resume as default }
