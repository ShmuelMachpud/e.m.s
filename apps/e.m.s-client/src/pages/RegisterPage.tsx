import {useEffect} from 'react'
import {trpc} from '../utils/trpc'

export default function RegisterPage() {

    const registerMutation =  trpc.addUser.useMutation();

    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const first_name = data.get('firstName') as string
        const last_name = data.get('lastName') as string
        const email = data.get('email') as string
        const password = data.get('password') as string

        await registerMutation.mutate({first_name, last_name, email, password});
    }
        // useEffect(()=> {
        //     if(!registerMutation.isLoading){
        //       if(registerMutation.data){
        //         console.log('Registration successful')
        //       }
        //     }
        // },[registerMutation])
        
    
      return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={(e)=> handleSubmit(e)}>
              <div>
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      autoComplete="firstName"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              <div>
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      autoComplete="lastName"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="confirmPassword"
                      autoComplete="confirmPassword"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <p>{registerMutation.error?.message}</p>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )
    }
