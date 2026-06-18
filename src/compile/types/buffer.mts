/**
 * @file Type Aliases - Buffer
 * @module mark/compile/types/Buffer
 */

import type { CompileContext, Resume } from '@flex-development/mark/compile'

/**
 * Start capturing output into a temporary compilation value.
 *
 * Captured values can later be serialized with {@linkcode Resume}.
 *
 * @see {@linkcode CompileContext}
 *
 * @this {CompileContext}
 *
 * @return {undefined}
 */
type Buffer = (this: CompileContext) => undefined

export type { Buffer as default }
