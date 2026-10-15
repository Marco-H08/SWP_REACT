import React from 'react'

type Props = {}

export default function Card({}: Props) {
  return (
        <div className="card">
        <h2>Peter</h2>
        <img src="https://picsum.photos/200/300" alt="Hero" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
  )
}