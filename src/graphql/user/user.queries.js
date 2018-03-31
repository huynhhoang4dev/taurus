import {
    GraphQLObjectType
} from 'graphql'
import UserType from './user.type'

export default new GraphQLObjectType({
    name: 'Query',
    fields: () =>({
        User: {
            type: UserType,
            args: {

            },
            resolve: () => {
                return null
            }
        }
    })
})

{
    profile: {
        username: string,
        password1: string,
        password2: string,
        mail: string 
    },
    tradding: {
        level: 'admin/user'
        limit: 5/10/15
        available_coin: 100,
        active_coin: 20,
        tradding: {
            time: '12/3/24'
            method: 'SELL',
            
            coin: 2,
            status
        }
    }
}