import type {} from '@flex-development/fsm/compile'

declare module '@flex-development/fsm/compile' {
  interface CompileData {
    flowCodeInside?: boolean | null | undefined
  }
}
