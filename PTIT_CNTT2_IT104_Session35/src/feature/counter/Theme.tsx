// Theme.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleTheme } from '../counter/Theme';

const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          background: 'transparent',
          border: '1px solid',
          color: theme === 'light' ? '#000' : '#fff',
          cursor: 'pointer',
        }}
      >
        {theme === 'light' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Theme;
