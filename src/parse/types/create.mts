/**
 * @file Type Aliases - Create
 * @module mark/parse/types/Create
 */

import type { Point, TokenizeContext } from '@flex-development/mark/parse'

/**
 * Create a tokenization context.
 *
 * @see {@linkcode Point}
 * @see {@linkcode TokenizeContext}
 *
 * @this {void}
 *
 * @param {Point | null | undefined} [from]
 *  Where to start parsing from
 * @return {TokenizeContext}
 *  The new tokenize context
 */
type Create = (this: void, from?: Point | null | undefined) => TokenizeContext

export type { Create as default }
