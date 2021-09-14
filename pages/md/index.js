import {getMDPosts} from "../../lib/posts";
import Link from 'next/link'

export default function ({postsData}) {
  return (
    <div>
      Post Test
      <ul>
        {postsData.map(
          post=>(
            <li key={post.id}>
              <Link href={`/md/${post.title}`}>
                <a>{post.title}</a>
              </Link>
              <br/>
              <small>
                <time dateTime={post.updatedAt}>{post.updatedAt}</time>
              </small>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export function getStaticProps() {
  const postsData = getMDPosts();
  return {
    props: {
      postsData
    },
  };
}
