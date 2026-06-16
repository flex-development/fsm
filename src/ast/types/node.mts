/**
 * @file Type Aliases - Node
 * @module fsm/ast/types/Node
 */

import type { NodeMap } from '@flex-development/fsm/ast'

/**
 * Union of registered nodes that can be created during event compilation.
 *
 * To register custom nodes, augment {@linkcode NodeMap}.
 * They will be added to this union automatically.
 */
type Node = NodeMap[keyof NodeMap]

export type { Node as default }
