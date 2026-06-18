import type { Code } from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
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
