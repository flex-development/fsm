import type { Root } from '@flex-development/fsm/ast'

declare module '@flex-development/fsm/ast' {
  interface NodeMap {
    root: Root
  }
}
