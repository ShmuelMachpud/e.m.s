import {createTRPCReact} from '@trpc/react-query'
import type {AppRouter} from '../../../server-trpc/src/trpc/queryTrpc'

export const trpc = createTRPCReact<AppRouter>({})