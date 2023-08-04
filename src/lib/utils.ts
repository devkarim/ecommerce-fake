import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export const cls = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const calculatePages = (total: number, perPage: number = 10) => {
  const pages = Math.ceil(total / perPage);
  return pages;
};

export const generatePagination = (
  currentPage: number,
  totalPages: number,
  maxPageNumbers: number
) => {
  let startPage: number, endPage: number;

  // Ensure maxPageNumbers is an odd number for balanced display
  if (maxPageNumbers % 2 === 0) {
    maxPageNumbers++;
  }

  // Calculate the starting and ending page numbers
  if (totalPages <= maxPageNumbers) {
    // If total pages are less than or equal to the maxPageNumbers,
    // display all pages.
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculate the half of maxPageNumbers (rounded down) to
    // show equal pages on both sides of the current page.
    const halfMaxPages = Math.floor(maxPageNumbers / 2);

    // Calculate the starting and ending page numbers
    if (currentPage <= halfMaxPages) {
      startPage = 1;
      endPage = maxPageNumbers;
    } else if (currentPage + halfMaxPages >= totalPages) {
      startPage = totalPages - maxPageNumbers + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMaxPages;
      endPage = currentPage + halfMaxPages;
    }
  }

  // Create an array with the page numbers to display
  const pageNumbers: number[] = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  if (startPage != 1) {
    pageNumbers.unshift(-1);
    pageNumbers.unshift(1);
  }

  if (endPage != totalPages) {
    pageNumbers.push(-1);
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
};
