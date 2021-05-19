import crypto from 'crypto';

type KeyProps = 'hex' | 'integer'

export default function generateUniqueId(key: KeyProps) {
  switch (key) {
    case 'hex':
      return crypto.randomBytes(4).toString('hex');

    case 'integer':
      return generateUniqueIDInteger();
  }
}

export function generateUniqueIDInteger(): number {
  return Math.floor(Math.random() * 3)
}