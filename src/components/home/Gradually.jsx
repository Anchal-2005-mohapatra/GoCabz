import React, { useState, useEffect } from 'react';

function Gradually({ targrtNo, duration = 2000 }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (currentNumber === targrtNo) return; // Stop if target is reached

    const incrementAmount = targrtNo / (duration / 10); // Calculate increment based on duration and interval
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + incrementAmount;
        if (nextNumber >= targrtNo) {
          clearInterval(interval); // Clear interval when target is reached
          return targrtNo;
        }
        return nextNumber;
      });
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(interval); // Cleanup on unmount or target change
  }, [targrtNo, duration, currentNumber]); // Re-run effect if target or duration changes

  return <div>{Math.round(currentNumber)}</div>; // Display rounded number
}

export default Gradually;