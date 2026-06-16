/**
 * @file Type Aliases - FullNormalizedExtension
 * @module fsm/parse/types/FullNormalizedExtension
 */

import type { Extension } from '@flex-development/fsm/parse'

/**
 * A full, filtered, and normalized extension, where all properties of
 * {@linkcode Extension} are required and defined.
 */
type FullNormalizedExtension = {
  [K in keyof Extension]-?: Exclude<Extension[K], null | undefined>
}

export type { FullNormalizedExtension as default }
