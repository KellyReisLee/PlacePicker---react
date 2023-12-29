import React from 'react'
import { useState, useEffect } from 'react';

function ProgressBar({ timer }) {
  const [remainingTime, setRemaninigTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaninigTime(prevState => prevState - 10)
    }, 10);
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <progress value={remainingTime} max={timer} />
    </div>
  )
}

export default ProgressBar