"use client"

import { Toaster } from "react-hot-toast"
import { RecoilRoot } from "recoil"

const RecoilProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      {children}
      <Toaster/>
    </RecoilRoot>
  )
}

export default RecoilProvider