import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

const dummyData = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
  { id: 3, name: 'Item C' },
  { id: 4, name: 'Item D' },
];

const DataView = () => {
  const mode = useSelector((state: RootState) => state.display.mode);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mode === 'grid' ? 'row' : 'column',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {dummyData.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            width: mode === 'grid' ? '100px' : '100%',
            textAlign: 'center',
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default DataView;
