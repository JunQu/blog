import { client } from '../graphql/client';
import { DiscussionsQuery } from '../graphql/DiscussionsQuery';

const DiscussionVariables = {
  orderBy: { field: 'UPDATED_AT', direction: 'ASC' },
  pageSize: parseInt(process.env.PageSize, 10),
  repositoryOwner: process.env.RepositoryOwner,
  repositoryName: process.env.RepositoryName,
};

export const getURLPath = (title, number) => {
  return title
    .split(' ')
    .map((charter) => charter.trim())
    .filter(Boolean)
    .join('-')
    .concat(`-${number}`);
};

export async function getMDPosts() {
  const DiscussionData = await client.request(DiscussionsQuery, DiscussionVariables);

  return DiscussionData.repository.discussions.nodes.map((node) => ({
    ...node,
    urlPath: getURLPath(node.title, node.number),
  }));
}

export async function getMDContent(name) {
  const DiscussionData = await client.request(DiscussionsQuery, DiscussionVariables);

  const post = DiscussionData.repository.discussions.nodes.find((node) => getURLPath(node.title, node.number) === name);
  return post?.bodyHTML;
}

export async function getMDAll() {
  const DiscussionData = await client.request(DiscussionsQuery, DiscussionVariables);

  return DiscussionData.repository.discussions.nodes.map((node) => ({
    params: {
      postTitle: getURLPath(node.title, node.number),
    },
  }));
}
