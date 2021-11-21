import React, { useState, useEffect, useRef } from 'react';
import useMouseMove from './hooks/mousemove';
import useAjax from './hooks/ajax';
import useLoading from './hooks/useLoading'
const TestUseState: React.FC = () => {
  const [count, setCount] = useState(0)
  const [num, setnum] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [isLoading, load] = useLoading()
  const movePos = useMouseMove()
  const random = useAjax([count])
  const useref = useRef(0)
  const useref2 = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log('count: in useEffect cb')
    document.title = `${count}`
  }, [count])

  useEffect(() => {
    console.log('addEventListener: in useEffect cb')
    const clickCb = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', clickCb)
    return () => {
      document.removeEventListener('click', clickCb)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // alert(useref.current)
    }, 2000);
  }, [])
  useEffect(() => {
    console.log(useref2.current?.focus())
    load(setLoading())
  }, [])

  console.log('before render')


  const setLoading = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(1000), 1500)
    })
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1); useref.current++ }}>count+</button>
      <div>{num}</div>
      <button onClick={() => setnum(num + 1)}>num+</button>
      <div>{`x:${position.x}||y:${position.y}`}</div>
      <div>{`x:${movePos.x}||y:${movePos.y}`}</div>
      <div>{`ajax:${random}`}</div>
      <input type="text" ref={useref2} />
      <div>
        <h2>isLoading:{`${isLoading}`}</h2>
      </div>
    </>
  )
}
export default TestUseState;