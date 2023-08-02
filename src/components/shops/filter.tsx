'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { cls } from '@/lib/utils';
import { PropertyType } from '@/generated/client';

import Input from '../ui/input';
import qs from 'query-string';

interface FilterProps {
  name: string;
  type: PropertyType;
  values?: string[];
}

const Filter: React.FC<FilterProps> = ({ name, values, type }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const key = name.toLowerCase();
  const selectedKey = searchParams.get(key);

  const onFilterChange = (value: string, range?: 'min' | 'max') => {
    const current = qs.parse(searchParams.toString());
    const suffix = range ? `_${range}` : '';
    const newKey = suffix ? `${key}${suffix}` : key;

    const query = {
      ...current,
      [newKey]: value.toLowerCase(),
    };

    if (type == PropertyType.FixedValues) {
      if (current[newKey] == value.toLowerCase()) {
        query[newKey] = '';
      }
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  if (type == PropertyType.FixedValues) {
    return (
      <div className="flex flex-wrap gap-2">
        {values?.map((v) => (
          <div
            key={v}
            className={cls(
              'border border-neutral p-2 rounded-lg cursor-pointer',
              {
                'bg-accent text-accent-content':
                  selectedKey?.toLowerCase() == v.toLowerCase(),
              }
            )}
            onClick={() => onFilterChange(v)}
          >
            <p>{v}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type == PropertyType.Decimal || type == PropertyType.Number) {
    return (
      <div className="flex flex-col gap-2">
        <Input
          type="number"
          className="border border-neutral p-2 rounded-lg"
          step={type == PropertyType.Decimal ? '0.01' : '1'}
          placeholder="Min"
          defaultValue={searchParams.get(`${key}_min`) ?? 0}
          onBlur={(e) => onFilterChange(e.target.value, 'min')}
        />
        <Input
          type="number"
          className="border border-neutral p-2 rounded-lg"
          step={type == PropertyType.Decimal ? '0.01' : '1'}
          placeholder="Max"
          defaultValue={searchParams.get(`${key}_max`) ?? 0}
          onBlur={(e) => onFilterChange(e.target.value, 'max')}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        className="border border-neutral p-2 rounded-lg"
        placeholder="Your value here"
        defaultValue={searchParams.get(`${key}`) ?? ''}
        onBlur={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
