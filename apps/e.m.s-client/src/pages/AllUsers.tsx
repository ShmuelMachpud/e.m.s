import {useState, useEffect} from 'react'
import {trpc} from '../utils/trpc'
import {UserType} from '../../../server-trpc/src/types/types'
import { log } from 'console'

export default function AllUsers() {

    const [users, setUsers] = useState<UserType[]>()
    // const token = localStorage.getItem('erp_token')
    const {data} = trpc.allUsers.useQuery()
    
    useEffect(()=>{
        setUsers(data)
        console.log(users);

    },[data])
        // setUsers(mutation.data?.input.token)
        
        
        // 
    
  return (
    <div>
        {users?.map((user) =>{
            return(
                <div key={user.id}>
                    <h1>{user.first_name}</h1>
                    <h2>{user.id}</h2>
                </div>
            )
        })}
    </div>
  )
}
