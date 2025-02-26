import type { ReactNode } from "react"

export default function Desktop({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full bg-[#008080]">
      {/* Desktop icons */}
      <div className="absolute left-4 top-4 flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center">
          <div className="h-12 w-12 bg-yellow-200"></div>
          <span className="mt-1 text-xs text-white">My Computer</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-white"></div>
          <span className="mt-1 text-xs text-white">Recycle Bin</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] shadow-inner">
        <button className="ml-2 mt-1 rounded bg-[#dfdfdf] px-4 py-1 text-sm font-bold shadow">Start</button>
      </div>

      {children}
    </div>
  )
}

