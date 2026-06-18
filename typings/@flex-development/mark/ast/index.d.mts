import type { Root } from '@flex-development/mark/ast'

declare module '@flex-development/mark/ast' {
  interface NodeMap {
    root: Root
  }
}
