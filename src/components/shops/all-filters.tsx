'use client';

import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Property } from '@/generated/client';

import FiltersList from './filters-list';
import MobileFilters from './mobile-filters';

interface AllFiltersProps {
  props: Property[];
}

const AllFilters: React.FC<AllFiltersProps> = ({ props }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<qs.StringifiableRecord>(
    Object.fromEntries(searchParams.entries())
  );
  const [isOpen, setOpen] = useState(false);

  const onFiltersChange = (key: string, value: string) => {
    setQuery((q) => {
      return { ...q, [key]: value };
    });
  };

  const onSearch = () => {
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true }
    );

    router.push(url);
    setOpen(false);
  };

  useEffect(() => {
    setQuery(Object.fromEntries(searchParams.entries()));
  }, [searchParams]);

  return (
    <>
      <MobileFilters
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        props={props}
        onChange={onFiltersChange}
        onSearch={onSearch}
        currentQuery={query}
      />
      <FiltersList
        props={props}
        onChange={onFiltersChange}
        onSearch={onSearch}
        currentQuery={query}
      />
    </>
  );
};

export default AllFilters;
