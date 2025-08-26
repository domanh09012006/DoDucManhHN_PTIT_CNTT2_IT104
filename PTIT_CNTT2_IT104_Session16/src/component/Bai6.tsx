import React, { Component } from 'react';

interface ThemeSwitcherState {
  isDarkMode: boolean;
}
export default class Bai6 extends Component<{}, ThemeSwitcherState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }
  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };
  render() {
    const { isDarkMode } = this.state;

    let statusText = '';
    if (isDarkMode) {
      statusText = 'Chế độ Tối đang bật';
    } else {
      statusText = 'Chế độ Sáng đang bật';
    }
    return (
      <div
        style={{
          backgroundColor: isDarkMode ? '#222' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
          minHeight: '100vh',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h2>{statusText}</h2>
        <button
          onClick={this.toggleTheme}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: isDarkMode ? '#444' : '#ddd',
            color: isDarkMode ? '#fff' : '#000'
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
