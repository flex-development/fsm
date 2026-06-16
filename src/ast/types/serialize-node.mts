/**
 * @file Type Aliases - SerializeNode
 * @module fsm/ast/types/SerializeNode
 */

import type { Node, Resume } from '@flex-development/fsm/ast'

/**
 * Serialize a node.
 *
 * > 👉 **Note**: Typically used by {@linkcode Resume} to transform buffered
 * > nodes into captured output.
 *
 * @see {@linkcode Node}
 *
 * @this {void}
 *
 * @param {Node | undefined} node
 *  The node to serialize
 * @return {string | null | undefined}
 *  The serialized node
 */
type SerializeNode = (
  this: void,
  node: Node | undefined
) => string | null | undefined

export type { SerializeNode as default }
