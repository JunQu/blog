import { client } from '../graphql/client'
import { DiscussionsListQuery } from '../graphql/DiscussionsListQuery'
import { DiscussionContentQuery } from '../graphql/DiscussionContentQuery'

const DiscussionVariables = {
  orderBy: { field: 'UPDATED_AT', direction: 'ASC' },
  pageSize: parseInt(process.env.PageSize, 10),
  repositoryOwner: process.env.RepositoryOwner,
  repositoryName: process.env.RepositoryName,
}

export const getURLPath = (title, number) => {
  return title
    .split(' ')
    .map((charter) => charter.trim())
    .filter(Boolean)
    .join('-')
    .concat(`-${number}`)
}

export async function getMDPosts() {
  const DiscussionData = await client.request(DiscussionsListQuery, DiscussionVariables)

  return DiscussionData.repository.discussions.nodes.map((node) => ({
    ...node,
    urlPath: getURLPath(node.title, node.number),
  }))
}

const getId = name => {
  if (!name || typeof name !== 'string') {
    console.error('getId: name is not a string: ', name)
  }
  const id = parseInt(name.split('-').at(-1), 10)
  if (!(id > 0)) {
    console.error('Post id is Invalid: ', id)
  }
  return id
}

export async function getMDContent(name) {
  const discussionId = getId(name)
  const postContent = await client.request(DiscussionContentQuery, {
    discussionId,
    repositoryOwner: process.env.RepositoryOwner,
    repositoryName: process.env.RepositoryName,
  })
  return postContent?.repository?.discussion?.bodyHTML || null
}

export async function getMDAll() {
  const DiscussionData = await client.request(DiscussionsListQuery, DiscussionVariables)

  return DiscussionData.repository.discussions.nodes.map((node) => ({
    params: {
      postTitle: getURLPath(node.title, node.number),
    },
  }))
}
