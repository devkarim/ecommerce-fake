'use client';

import { useMemo } from 'react';

import { FullProperty } from '@/types/db';
import { cls } from '@/lib/utils';

interface PropsListProps {
  props: FullProperty[];
  className?: string;
}

const PropsList: React.FC<PropsListProps> = ({ props, className }) => {
  const propsMap = useMemo(() => {
    const map = new Map<string, string[]>();

    props.forEach((prop) => {
      const propName = prop.property.name;
      if (map.has(propName)) {
        map.set(propName, [...(map.get(propName) || []), prop.value]);
      } else {
        map.set(propName, [prop.value]);
      }
    });

    return map;
  }, [props]);

  return (
    <div className="space-y-1">
      {Array.from(propsMap.keys()).map((propName) => (
        <div
          key={propName}
          className={cls('flex text-sm items-center gap-2', className)}
        >
          <span className="font-bold">{propName}: </span>
          <span>{propsMap.get(propName)?.join(' | ')}</span>
        </div>
      ))}
    </div>
  );
};

export default PropsList;
