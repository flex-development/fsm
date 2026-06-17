import type { Code } from '@flex-development/fsm/parse'

declare module '@flex-development/fsm/parse' {
  interface ContainerState {
    marker?: Code | undefined
  }

  interface ContentTypeMap {
    document: 'document'
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
    null: 'null'
  }
}
