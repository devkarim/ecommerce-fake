'use client';

import qs from 'query-string';
import { Dialog } from '@headlessui/react';
import { FaPlus, FaXmark } from 'react-icons/fa6';

import { Property } from '@/generated/client';

import Filter from './filter';

interface MobileFiltersProps {
  isOpen: boolean;
  props: Property[];
  currentQuery: qs.StringifiableRecord;
  onChange: (key: string, value: string) => void;
  onSearch: () => void;
  onOpen: () => void;
  onClose: () => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  isOpen,
  props,
  currentQuery,
  onChange,
  onSearch,
  onOpen,
  onClose,
}) => {
  return (
    <div className="lg:hidden">
      <button className="btn btn-accent rounded-full" onClick={onOpen}>
        <FaPlus /> Filters
      </button>
      <Dialog
        className="relative z-50 lg:hidden"
        open={isOpen}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed top-0 right-0 h-full bg-base-100 flex max-w-xs w-full p-4">
          <Dialog.Panel className="w-full space-y-8">
            <div className="text-end">
              <button
                className="btn btn-sm btn-circle btn-neutral"
                onClick={onClose}
              >
                <FaXmark />
              </button>
            </div>
            {props.length != 0 ? (
              <>
                {props.map((p) => (
                  <div key={p.id}>
                    <p className="font-bold">{p.name}</p>
                    <div className="divider my-2"></div>
                    <Filter
                      name={p.name}
                      type={p.type}
                      values={p.values}
                      onChange={onChange}
                      currentQuery={currentQuery}
                    />
                  </div>
                ))}
                <button className="btn btn-neutral w-full" onClick={onSearch}>
                  Search
                </button>{' '}
              </>
            ) : (
              <p className="opacity-60 text-center w-full mt-4">
                No filters found.
              </p>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileFilters;
