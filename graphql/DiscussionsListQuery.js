import { gql } from 'graphql-request'

export const DiscussionsListQuery = gql`
  query GetRepository($orderBy: DiscussionOrder, $pageSize: Int, $repositoryOwner: String!, $repositoryName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      id
      url
      discussions(first: $pageSize, orderBy: $orderBy) {
        nodes {
          id
          number
          author {
            url
            login
            avatarUrl
          }
          category {
            id
            name
            emoji
            description
          }
          labels(first: 6) {
            nodes {
              id
              name
              color
            }
          }
          createdAt
          updatedAt
          lastEditedAt
          publishedAt
          resourcePath
          title
          upvoteCount
          url
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
    rateLimit {
      limit
      cost
      used
      resetAt
    }
  }
`
