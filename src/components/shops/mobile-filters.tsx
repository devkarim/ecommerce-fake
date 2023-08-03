'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Dialog } from '@headlessui/react';

import { Property } from '@/generated/client';
import Filter from './filter';

interface MobileFiltersProps {
  props: Property[];
  onChange: (key: string, value: string) => void;
  onSearch: () => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  props,
  onChange,
  onSearch,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="btn btn-accent rounded-full"
        onClick={() => setOpen((open) => !open)}
      >
        <FaPlus /> Filters
      </button>
      <Dialog
        className="relative z-50 lg:hidden"
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed top-0 right-0 h-full bg-base-100 flex max-w-xs w-full p-4">
          <Dialog.Panel className="space-y-12">
            {props.map((p) => (
              <div key={p.id}>
                <p className="font-bold">{p.name}</p>
                <div className="divider my-2"></div>
                <Filter
                  name={p.name}
                  type={p.type}
                  values={p.values}
                  onChange={onChange}
                />
              </div>
            ))}
            <button className="btn btn-neutral w-full" onClick={onSearch}>
              Search
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileFilters;
