import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>something</div>
  )
}

export default App