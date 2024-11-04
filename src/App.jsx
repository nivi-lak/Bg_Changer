import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('white')

  // function setColor(color) 
  // {
  //   setColor(color)
  // }
  return (
    <div className=' w-screen h-screen duration-200 bg-white' style={{backgroundColor:color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-3 py-2 rounded-2xl bg-red-700'>Red</button>
          <button onClick={() => setColor('green')} className='outline-none px-3 py-2 rounded-2xl bg-green-700'>Green</button>
          <button onClick={() => setColor('blue')} className='outline-none px-3 py-2 rounded-2xl bg-blue-800'>Blue</button>
          <button onClick={() => setColor('purple')} className='outline-none px-3 py-2 rounded-2xl bg-purple-800'>Purple</button>
          <button onClick={() => setColor('orange')} className='outline-none px-3 py-2 rounded-2xl bg-orange-600'>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

// Explanation of the new classes:

// flex flex-col items-center: Centers the text horizontally.
// justify-start: Aligns content to the top of the container.
// pt-4: Adds some padding at the top.
// w-full: Ensures the text spans the full width, so text-center properly centers the content.
// w-full: Sets the width of the element to 100% of its parent/container.
// h-screen: Sets the height to 100% of the viewport height.
// duration-200: Sets the duration of any transition effect on this element to 200 milliseconds.
// fixed: Positions the element fixed relative to the viewport, so it stays in place even when scrolling.
// flex: Makes the element a flex container, enabling flexible layout for its children.
// flex-wrap: Allows child elements to wrap onto multiple lines if necessary.
// justify-center: Centers the child elements horizontally within the flex container.
// bottom-12: Positions the element 12 units from the bottom of the viewport.
// inset-x-0: Sets both the left and right positions to 0, centering the element horizontally.
// px-2: Adds 2 units of horizontal padding (left and right) to the element.
// max-w-2xl: sets the maximum width of an element to the size defined for 2xl, which is 42rem (or 672 pixels by default).