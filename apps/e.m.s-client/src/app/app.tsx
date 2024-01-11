// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import Login from '../pages/Login'

import {useState, useEffect} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {httpBatchLink} from '@trpc/client'
import {trpc} from '../utils/trpc'

import AllEmployees from '../pages/Index'

function App() {

  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => 
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        })
      ]
    })
  )
  return (
    <div>
     <trpc.Provider client={trpcClient} queryClient={queryClient}>
       <QueryClientProvider client={queryClient}>
        <AllEmployees/>
        <Login/>
       </QueryClientProvider>
     </trpc.Provider>
    </div>
  )

}



export default App;
