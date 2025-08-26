import React, { Component } from 'react';

export default class SubjectList extends Component {
  subjects: string[] = ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'];

  render() {
    return (
      <div
        style={{
          backgroundColor: '#1e1e1e',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '400px',
          margin: '0 auto',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Danh sách môn học
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {this.subjects.map((subject, index) => (
            <button
              key={index}
              style={{
                backgroundColor: '#6ec1e4',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background-color 0.3s ease',
              }}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
