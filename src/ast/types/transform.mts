/**
 * @file Type Aliases - Transform
 * @module fsm/ast/types/Transform
 */

import type { Tree } from '@flex-development/fsm/ast'

/**
 * Transform a syntax `tree`.
 *
 * > 👉 **Note**: Returning `null` or `undefined` will preserve `tree`.
 *
 * @see {@linkcode Tree}
 *
 * @this {void}
 *
 * @param {Tree} tree
 *  The tree to transform
 * @return {Tree | null | undefined}
 *  The new or transformed tree, or nothing (in which case `tree` is used)
 */
type Transform = (this: void, tree: Tree) => Tree | null | undefined

export type { Transform as default }
