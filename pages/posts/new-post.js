import { disRes } from '../../TmpData/github';
import 'github-markdown-css/github-markdown.css';

export default function NewPost() {
  const html = disRes.data.repository.discussions.nodes[0].bodyHTML;
  return (
    <main className="container">
      <section className="read-area">
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </main>
  );
}
