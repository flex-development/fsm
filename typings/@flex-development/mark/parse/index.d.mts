import type { Code, TokenizeContext } from '@flex-development/mark/parse'

declare module '@flex-development/mark/parse' {
  interface ContainerState {
    marker?: Code | undefined
  }

  interface ContentTypeMap {
    document: 'document'
  }

  interface ContextMap {
    mark: TokenizeContext
  }

  interface TokenTypeMap {
    eoc: 'eoc'
    fail: 'fail'
    succ: 'succ'
    null: 'null'
  }
}
