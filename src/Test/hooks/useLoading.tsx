
import React from "react"
function useLoading() {

  const [isLoading, setState] = React.useState(false)

  const load = (aPromise: Promise<any>) => {

    setState(true)

    return aPromise.then(() => setState(false))

  }



  // 实际需要: [boolean, typeof load] 类型

  // 而不是自动推导的：(boolean | typeof load)[]

  return [isLoading, load] as const

}
export default useLoading