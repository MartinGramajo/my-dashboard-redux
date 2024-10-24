'use client'

import { Provider } from "react-redux"
import { store } from './'; // Assuming the store file is in the same directory



interface Props {
    children : React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers
