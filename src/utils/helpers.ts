import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isPathIn = (path: string, paths: string[]) => paths.some(p => path.startsWith(p));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
