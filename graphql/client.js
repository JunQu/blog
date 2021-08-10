import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql';
const Authorization = '';
export const client = new GraphQLClient(endpoint, { headers: {Authorization} })

