'use client';

import { cls } from '@/lib/utils';
import { PropertyType } from '@/generated/client';

import Input from '../ui/input';
import qs from 'query-string';
import { useState } from 'react';

interface FilterProps {
  name: string;
  type: PropertyType;
  currentQuery: qs.StringifiableRecord;
  values?: string[];
  onChange: (key: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  name,
  type,
  currentQuery,
  values,
  onChange,
}) => {
  const key = name.toLowerCase();
  const selectedKey = currentQuery[key] as string;
  const [active, setActive] = useState<string[]>(selectedKey?.split(',') ?? []);

  const onFilterChange = (value: string) => {
    if (type == PropertyType.FixedValues) {
      let newActive = active;
      if (active.includes(value.toLowerCase())) {
        newActive = active.filter((v) => v != value.toLowerCase());
        setActive(newActive);
      } else {
        newActive = [...active, value.toLowerCase()];
        setActive(newActive);
      }
      onChange(key, newActive.join(','));
      return;
    }

    onChange(key, value.toLowerCase());
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
          placeholder="Your value here"
          defaultValue={(currentQuery[key] as number) ?? 0}
          onChange={(e) => onFilterChange(e.target.value)}
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
        defaultValue={(currentQuery[key] as string) ?? ''}
        onBlur={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
