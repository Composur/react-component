import{useState,useEffect } from 'react';

const useMouseMove = ()=>{
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    console.log('addEventListener: in useEffect cb')
    const clickCb = (e:TouchEvent)=>{
      setPosition({x:e.touches[0].pageX,y:e.touches[0].pageY})
    }
    document.addEventListener('touchmove',clickCb)
    return ()=>{
      document.removeEventListener('touchmove',clickCb)
    }
  },[])
  return position
}

export default useMouseMove;