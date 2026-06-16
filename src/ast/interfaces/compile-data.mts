/**
 * @file Interfaces - CompileData
 * @module fsm/ast/interfaces/CompileData
 */

import type * as compile from '@flex-development/fsm/compile'

/**
 * Registry of tracked data.
 *
 * This interface can be augmented to register custom data.
 *
 * @example
 *  declare module '@flex-development/fsm/ast' {
 *    interface CompileData {
 *      flowCodeInside?: boolean | null | undefined
 *    }
 *  }
 *
 * @see {@linkcode compile.CompileData}
 *
 * @extends {compile.CompileData}
 */
interface CompileData extends compile.CompileData {}

export type { CompileData as default }
