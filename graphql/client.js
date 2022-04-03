import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql'
const Authorization = `bearer ${process.env.AuthorizationToken}`
export const client = new GraphQLClient(endpoint, { headers: { Authorization } })
