"use client"

import { useContext , useEffect, useState} from "react"
import { ThemeContext } from "@/context/ThemeContext"
//客户端组件，用作主题切换，把下面全部都包起来
const ThemeProvider = ({children}) => {
  const { theme } = useContext(ThemeContext);
  //挂在后再把主题传进去
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  if (mounted) {
    return <div className={theme}>{children}</div>
  }
  
}
export default ThemeProvider;