import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export const cls = (...classes: ClassValue[]) => twMerge(clsx(...classes));
