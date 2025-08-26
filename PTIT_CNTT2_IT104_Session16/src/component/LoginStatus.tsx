import React, { Component } from 'react';
interface LoginStatusState {
  isLoggedIn: boolean;
}
export default class LoginStatus extends Component<{}, LoginStatusState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  toggleLogin = () => {
    this.setState((prevState) => {
      if (prevState.isLoggedIn === true) {
        return { isLoggedIn: false };
      } else {
        return { isLoggedIn: true };
      }
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: '#d0eaff',
          border: '2px solid #000',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '400px',
          margin: '40px auto',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '20px' }}>
          {this.state.isLoggedIn === true ? (
            <span>Xin chao, User!</span>
          ) : (
            <span>Vui long dang nhap de tiep tuc.</span>
          )}
        </div>
        <button
          onClick={this.toggleLogin}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          {this.state.isLoggedIn === true ? 'Dang xuat' : 'Dang nhap'}
        </button>
      </div>
    );
  }
}
