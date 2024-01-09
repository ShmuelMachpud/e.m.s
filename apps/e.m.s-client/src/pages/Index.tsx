import {trpc} from '../utils/trpc'

import React from 'react'

export default function Index() {

    const employees = trpc.allEmployees.useQuery('shmuel')
  return (
    <div>
        {employees.data.}
    </div>
  )
}
