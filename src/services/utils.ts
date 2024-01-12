import { randomBytes } from 'crypto';

export function generateRandomIdentifier() {
    return randomBytes(16).toString('hex');
}
