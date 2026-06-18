/**
 * @file Type Aliases - Preprocess
 * @module mark/ast/types/Preprocess
 */

import type { CompileContext, Tree } from '@flex-development/mark/ast'
import type { Event } from '@flex-development/mark/parse'

/**
 * Prepare `events` and the initial `tree` before compilation begins.
 *
 * This hook can inspect or mutate `events`, initialize compiler data,
 * or manipulate the initial `tree` before event handlers run.
 *
 * @see {@linkcode CompileContext}
 * @see {@linkcode Event}
 * @see {@linkcode Tree}
 *
 * @this {CompileContext}
 *
 * @param {Event[]} events
 *  The current list of events
 * @param {Tree} tree
 *  The current syntax tree
 * @return {null | undefined}
 */
type Preprocess = (
  this: CompileContext,
  events: Event[],
  tree: Tree
) => null | undefined

export type { Preprocess as default }
