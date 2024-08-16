import React from 'react'

export default function BorderMagicBtn({props,children}:any) {
  return (
    <button className="relative cursor-pointer inline-flex h-12 overflow-hidden rounded-full p-[1.5px]  transition duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    {...props}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {children}
    </span>
  </button>
  )
}
