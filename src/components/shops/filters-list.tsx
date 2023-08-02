import { Property } from '@/generated/client';

import Filter from './filter';

interface FiltersListProps {
  props: Property[];
}

const FiltersList: React.FC<FiltersListProps> = ({ props }) => {
  return (
    <div className="max-w-xs space-y-12">
      {props.map((p) => (
        <div key={p.id}>
          <p className="font-bold">{p.name}</p>
          <div className="divider"></div>
          <Filter name={p.name} type={p.type} values={p.values} />
        </div>
      ))}
    </div>
  );
};

export default FiltersList;
