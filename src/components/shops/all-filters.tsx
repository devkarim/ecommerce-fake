'use client';

import qs from 'query-string';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Property } from '@/generated/client';

import FiltersList from './filters-list';
import MobileFilters from './mobile-filters';

interface AllFiltersProps {
  props: Property[];
}

const AllFilters: React.FC<AllFiltersProps> = ({ props }) => {
  const router = useRouter();
  const [query, setQuery] = useState<qs.StringifiableRecord>({});

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
  };

  return (
    <>
      <MobileFilters
        props={props}
        onChange={onFiltersChange}
        onSearch={onSearch}
      />
      <FiltersList
        props={props}
        onChange={onFiltersChange}
        onSearch={onSearch}
      />
    </>
  );
};

export default AllFilters;
