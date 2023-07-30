import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export const cls = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
