import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        secondpassword: {
            type: GraphQLString
        },
        mail: {
            type: GraphQLString
        }
    })
})