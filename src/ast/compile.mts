/**
 * @file compile
 * @module fsm/ast/compile
 */

import type { Node, Tree } from '@flex-development/fsm/ast'
import type {} from '@flex-development/fsm/compile'

declare module '@flex-development/fsm/compile' {
  interface CompileResultMap {
    tree: Tree
  }

  interface CompileValueMap {
    node: Node
  }
}
