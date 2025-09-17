import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a version 4 UUID.
 * @returns A new UUID string.
 */
export function generateUuid(): string {
  return uuidv4();
}