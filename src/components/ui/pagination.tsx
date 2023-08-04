'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import { calculatePages, generatePagination } from '@/lib/utils';

interface PaginationProps {
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const params = useSearchParams();
  const router = useRouter();

  const currentPage = +(params.get('page') ?? 1);
  const totalPages = calculatePages(count);

  const pagesList = generatePagination(currentPage, totalPages, 3);

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  const goNextPage = () => {
    goPage(currentPage + 1);
  };

  const goPreviousPage = () => {
    goPage(currentPage - 1);
  };

  const goPage = (page: number) => {
    const url = qs.stringifyUrl({
      url: window.location.href,
      query: { ...Object.fromEntries(params.entries()), page },
    });
    router.push(url);
    router.refresh();
  };

  return (
    <div className="join w-full justify-center">
      <button
        className="join-item btn"
        disabled={!canGoPrevious}
        onClick={goPreviousPage}
      >
        «
      </button>
      {pagesList.map((page) => (
        <>
          {page != -1 && (
            <button
              key={page}
              className={`join-item btn ${
                page === currentPage ? 'btn-active' : ''
              }`}
              onClick={() => goPage(page)}
            >
              {page}
            </button>
          )}
          {page == -1 && (
            <button className="join-item btn btn-disabled">...</button>
          )}
        </>
      ))}
      <button
        className="join-item btn"
        disabled={!canGoNext}
        onClick={goNextPage}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
