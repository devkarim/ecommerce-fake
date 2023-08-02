'use client';

import { PropertyType } from '@/generated/client';

import Input from '../ui/input';

interface FilterProps {
  type: PropertyType;
  values?: string[];
}

const Filter: React.FC<FilterProps> = ({ values, type }) => {
  if (type == PropertyType.FixedValues) {
    return (
      <div className="flex flex-wrap gap-2">
        {values?.map((v) => (
          <div key={v} className="border border-neutral p-2 rounded-lg">
            {v}
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
        />
        <Input
          type="number"
          className="border border-neutral p-2 rounded-lg"
          step={type == PropertyType.Decimal ? '0.01' : '1'}
          placeholder="Max"
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
      />
    </div>
  );
};

export default Filter;
