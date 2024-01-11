import {  trpc,
  type ReactQueryOptions,
  type RouterInputs,
  type RouterOutputs,} from '../utils/trpc'

export default function Index() {

   const {data} =  trpc.allEmployees.useQuery();

   if(data)console.log(data);
   
   return data?.map((employee) => {
    return(
      <div>{employee.firstName}</div>
    )
   })
}
