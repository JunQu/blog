import { gql } from 'graphql-request'

export const DiscussionContentQuery  = gql`
  query discussionContent($repositoryOwner: String!,$repositoryName: String! ,$discussionId: Int!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      discussion(number: $discussionId) {
        id
        number
        url
        resourcePath
        author {
          login
          url
          avatarUrl(size: 32)
        }
        createdAt
        publishedAt
        updatedAt
        lastEditedAt
        editor {
          login
          url
          avatarUrl(size: 32)
        }
        title
        bodyHTML
        category {
          id
          name
        }
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
