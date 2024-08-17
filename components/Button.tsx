import React from 'react'

const Button = ({ title, type, length }: { title: string, type?: string, length?: number }) => {
  return (
    <button className="py-4 mt-2 mb-0 px-8 bg-red-main text-white rounded-full" disabled={type === "checkout" && length === 0}>
        {title}
    </button>
  )
}

export default Button