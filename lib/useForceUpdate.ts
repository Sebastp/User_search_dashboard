import { useState } from 'react'

//forces re render on a component
export const useForceUpdate = () => {
  const [value, setValue] = useState(0) // integer state
  return () => setValue(value => ++value) // update the state to force render
}
