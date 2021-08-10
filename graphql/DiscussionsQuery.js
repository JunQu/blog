import {gql} from "graphql-request";


export const DiscussionsQuery = gql`
    query GetRepository ($orderBy:DiscussionOrder){
        repository(owner: "JunQu", name: "blog") {
            id
            nameWithOwner
            description
            url
            discussions(first: 5, orderBy: $orderBy) {
                nodes {
                    id
                    body
                    bodyHTML
                    bodyText
                    url
                    updatedAt
                }
            }
        }
    }
`;
