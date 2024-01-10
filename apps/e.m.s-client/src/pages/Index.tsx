import {trpc} from '../utils/trpc'

import {useState} from 'react'

export default async function Index() {


     const employees = trpc.allEmployees.useQuery()

  return (
    <div>
        {}
    </div>
  )
}
