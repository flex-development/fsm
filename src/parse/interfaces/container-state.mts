/**
 * @file Interfaces - ContainerState
 * @module fsm/parse/interfaces/ContainerState
 */

/**
 * Registry of data tracked when parsing containers.
 *
 * This interface can be augmented to register custom fields.
 *
 * @example
 *  declare module '@flex-development/fsm/parse' {
 *    interface ContainerState {
 *      initialBlankLine?: boolean | null | undefined
 *    }
 *  }
 */
interface ContainerState {}

export type { ContainerState as default }
