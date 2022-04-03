import { gql } from 'graphql-request'

export const DiscussionsQuery = gql`
  query GetRepository($orderBy: DiscussionOrder, $pageSize: Int, $repositoryOwner: String!, $repositoryName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      id
      url
      discussions(first: $pageSize, orderBy: $orderBy) {
        nodes {
          id
          author {
            url
            login
            avatarUrl
          }
          body
          bodyHTML
          bodyText
          category {
            id
            name
            emoji
            description
          }
          comments(first: 3) {
            nodes {
              author {
                avatarUrl
                login
                resourcePath
                url
              }
              bodyHTML
              bodyText
              publishedAt
              deletedAt
              updatedAt
              url
              upvoteCount
            }
          }
          createdAt
          labels(first: 6) {
            nodes {
              id
              name
              color
            }
          }
          lastEditedAt
          number
          publishedAt
          resourcePath
          title
          updatedAt
          upvoteCount
          url
          viewerCanDelete
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
