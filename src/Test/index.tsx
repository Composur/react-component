import React, { useState, useEffect, useRef } from 'react';
import useMouseMove from './hooks/mousemove';
import useAjax from './hooks/ajax';
import useLoading from './hooks/useLoading'
import Transition from '@/components/Transition';
import Button from '@/components/Button';
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
  const [showTransitionContext, setTransitionContext] = useState(false)
  const changeShowTransitionContext = () => {
    setTransitionContext(!showTransitionContext)
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
      <div>
        <div>测试Transition 点击下面的 tooggle </div>
        <Button size={'sm'} btnType={'primary'} onClick={changeShowTransitionContext}>tooggle</Button>
        <Transition in={showTransitionContext} timeout={300} animation={'zoom-in-top'}>
          <div>
            <div> 测试 Transition 内容</div>
            <div> 测试 Transition 内容</div>
            <div> 测试 Transition 内容</div>
            <div> 测试 Transition 内容</div>
          </div>
        </Transition>
      </div>
    </>
  )
}
export default TestUseState;