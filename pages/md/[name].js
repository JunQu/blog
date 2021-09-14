import 'github-markdown-css/github-markdown.css';
import {getMDAll, getMDContent} from "../../lib/posts";

export default function NewPost({html}) {
  return (
    <main className="container">
      <section className="read-area">
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </main>
  );
}

export function getStaticPaths() {
  const paths = getMDAll();
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({params}) {
  const html = getMDContent(params.name);
  return {
    props: {
      html
    }
  }
}
