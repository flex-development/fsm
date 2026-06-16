/**
 * @file Interfaces - NodeMap
 * @module fsm/ast/interfaces/NodeMap
 */

import type { Fragment } from '@flex-development/fsm/ast'

/**
 * Registry of nodes that can be created during event compilation.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/fsm/ast' {
 *    interface NodeMap {
 *      comment: docast.Comment
 *      root: docast.Root
 *    }
 *  }
 */
interface NodeMap {
  fragment: Fragment
}

export type { NodeMap as default }
