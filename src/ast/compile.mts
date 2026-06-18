/**
 * @file compile
 * @module mark/ast/compile
 */

import type { Node, Tree } from '@flex-development/mark/ast'
import type {} from '@flex-development/mark/compile'

declare module '@flex-development/mark/compile' {
  interface CompileResultMap {
    tree: Tree
  }

  interface CompileValueMap {
    node: Node
  }
}
