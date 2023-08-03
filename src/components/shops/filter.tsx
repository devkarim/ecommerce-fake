'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { cls } from '@/lib/utils';
import { PropertyType } from '@/generated/client';

import Input from '../ui/input';
import qs from 'query-string';
import { useState } from 'react';

interface FilterProps {
  name: string;
  type: PropertyType;
  onChange: (key: string, value: string) => void;
  values?: string[];
}

const Filter: React.FC<FilterProps> = ({ name, values, type, onChange }) => {
  const key = name.toLowerCase();
  const searchParams = useSearchParams();
  const selectedKey = searchParams.get(key);
  const [active, setActive] = useState<string[]>(selectedKey?.split(',') ?? []);

  const onFilterChange = (value: string, range?: 'min' | 'max') => {
    const suffix = range ? `_${range}` : '';
    const newKey = suffix ? `${key}${suffix}` : key;

    if (type == PropertyType.FixedValues) {
      let newActive = active;
      if (active.includes(value.toLowerCase())) {
        newActive = active.filter((v) => v != value.toLowerCase());
        setActive(newActive);
      } else {
        newActive = [...active, value.toLowerCase()];
        setActive(newActive);
      }
      onChange(newKey, newActive.join(','));
      return;
    }

    onChange(newKey, value.toLowerCase());
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
                'bg-accent text-accent-content': active.includes(
                  v.toLowerCase()
                ),
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
          className="border border-neutral p-2 rounded-lg bg-transparent"
          step={type == PropertyType.Decimal ? '0.01' : '1'}
          placeholder="Min"
          defaultValue={searchParams.get(`${key}_min`) ?? 0}
          onBlur={(e) => onFilterChange(e.target.value, 'min')}
        />
        <Input
          type="number"
          className="border border-neutral p-2 rounded-lg bg-transparent"
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
        className="border border-neutral p-2 rounded-lg bg-transparent"
        placeholder="Your value here"
        defaultValue={searchParams.get(`${key}`) ?? ''}
        onBlur={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
