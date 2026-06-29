/**
 * Generates a UUID.
 */
export function randomUUID(): string {

    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `ps-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}