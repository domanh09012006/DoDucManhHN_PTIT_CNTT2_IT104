import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Student3() {
    const [searchParams, setSearchParams] = useSearchParams()
    const value = searchParams.get("value")

  return (
    <div>Student3: {value}</div>
  )
}

export default Student3