import React from 'react'
export const FormatName = () => {
  const user = {
    firstName: "Nguyen Van",
    lastName: "Nam",
  };
  function formatName(u: { firstName: string; lastName: string }) {
    return u.firstName + " " + u.lastName;
  }
  return (
    <>
      <h1>Bai 5</h1>
      <p>Ho ten day du: {formatName(user)}</p>
    </>
  )
}
