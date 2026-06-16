/**
 * @file Type Aliases - Handles
 * @module fsm/ast/types/Handles
 */

import type { Handle } from '@flex-development/fsm/ast'
import type { TokenType } from '@flex-development/fsm/parse'

/**
 * Record, where each key is a token type and each value is an event handler.
 *
 * @see {@linkcode Handle}
 * @see {@linkcode TokenType}
 */
type Handles = Partial<Record<TokenType, Handle<any> | null | undefined>>

export type { Handles as default }
