import React from 'react'
export const Calculation = () => {
  const a = 10;
  const b = 10;
  function cong(x: number, y: number) {
    return x + y;
  }
  function tru(x: number, y: number) {
    return x - y;
  }
  function nhan(x: number, y: number) {
    return x * y;
  }
  function chia(x: number, y: number) {
    return x / y;
  }
  return (
    <>
      <h1>Bai2</h1>
      <p>{a} + {b} = {cong(a, b)}</p>
      <p>{a} - {b} = {tru(a, b)}</p>
      <p>{a} * {b} = {nhan(a, b)}</p>
      <p>{a} / {b} = {chia(a, b)}</p>
    </>
  )
}
