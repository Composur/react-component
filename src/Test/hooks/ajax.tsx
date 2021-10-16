import{useState,useEffect } from 'react';
const useAjax = ( deps: any[] = [])=>{
  const [position, setPosition] = useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setPosition(10000*Math.random())
    }, 300);
  },deps)
  return position
}

export default useAjax;