/**
 * @file Type Aliases - Write
 * @module mark/parse/types/Write
 */

import type { Event, Writable } from '@flex-development/mark/parse'

/**
 * Write a slice of chunks.
 *
 * The eof code (`null`) can be used to signal end of stream.
 *
 * @see {@linkcode Event}
 * @see {@linkcode Writable}
 *
 * @this {void}
 *
 * @param {Writable} slice
 *  The chunk, file, buffer, or list to write
 * @return {Event[]}
 *  The current list of events
 */
type Write = (this: void, slice: Writable) => Event[]

export type { Write as default }
