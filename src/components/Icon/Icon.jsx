import React from 'react'

function Spinner () {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path d="M16 0c-8.711 0-15.796 6.961-15.995 15.624 0.185-7.558 5.932-13.624 12.995-13.624 7.18 0 13 6.268 13 14 0 1.657 1.343 3 3 3s3-1.343 3-3c0-8.837-7.163-16-16-16zM16 32c8.711 0 15.796-6.961 15.995-15.624-0.185 7.558-5.932 13.624-12.995 13.624-7.18 0-13-6.268-13-14 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 8.837 7.163 16 16 16z" />
    </svg>
  )
}

export default function Icon ({ name }) {
  switch (name) {
    case 'spinner':
      return <Spinner />
    default:
      throw new Error(`${name} is not a valid icon.`)
  }
}