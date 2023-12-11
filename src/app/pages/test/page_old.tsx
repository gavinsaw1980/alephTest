'use client'
import React from 'react'

export default function Test({ localData }:any) {
    const fetchData = async () => {
        alert('click');
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={fetchData}>Fetch</button>
    </div>
  )
}
