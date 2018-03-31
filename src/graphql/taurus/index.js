import { GraphQLSchema } from 'graphql'

import Query from './tautus.query'
import Mutation from './taurus.mutation'

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
})