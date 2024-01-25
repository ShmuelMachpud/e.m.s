import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TableAllEmployees from '../components/home/TableAllEmployees'
import {trpc} from '../utils/trpc'


export default function HomePage() {

  const navigate = useNavigate()
  const {data, error, isLoading} = trpc.allEmployees.useQuery()
  
  const loading = () => {
    return(<div>isLoading</div>)
  }

  const getTable = () =>{
    if (!data){
      return null
    }
    console.log(data);
    return (<TableAllEmployees data={data}></TableAllEmployees>)
  }
  useEffect(()=> {
    if(isLoading){
      loading()
    }

    if(error) {
        navigate('/Login')
    }

    if(data){
      getTable()
    }

        
},[data, error, isLoading])
 
  return (
    <div>
      {isLoading && loading()}
      {getTable()}
    </div>
  )
}
