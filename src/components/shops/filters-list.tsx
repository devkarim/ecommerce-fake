import qs from 'query-string';

import { Property } from '@/generated/client';

import Filter from './filter';

interface FiltersListProps {
  props: Property[];
  currentQuery: qs.StringifiableRecord;
  onChange: (key: string, value: string) => void;
  onSearch: () => void;
}

const FiltersList: React.FC<FiltersListProps> = ({
  props,
  currentQuery,
  onChange,
  onSearch,
}) => {
  return (
    <div className="hidden lg:block max-w-xs space-y-12">
      {props.map((p) => (
        <div key={p.id}>
          <p className="font-bold">{p.name}</p>
          <div className="divider"></div>
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
      </button>
    </div>
  );
};

export default FiltersList;
