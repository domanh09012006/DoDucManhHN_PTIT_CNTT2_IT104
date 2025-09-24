import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplayMode } from './displaySlice';
import type { RootState } from '../../store/store';

const DisplayToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.display.mode);

  return (
    <button
      onClick={() => dispatch(toggleDisplayMode())}
      style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}
    >
      Chuyển sang {mode === 'grid' ? 'danh sách' : 'lưới'}
    </button>
  );
};

export default DisplayToggle;
