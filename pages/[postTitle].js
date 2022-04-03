import 'github-markdown-css/github-markdown.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getMDAll, getMDContent } from '../lib/posts'

export default function Post({ html }) {
  return (
    <>
      <header>
        <div className={utilStyles.backLink}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </header>
      <main className={utilStyles.articleContainer}>
        <section className={utilStyles.articleContent}>
          <article className={utilStyles.markdownBody} dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getMDAll()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const html = await getMDContent(params.postTitle)
  return {
    props: {
      html,
    },
  }
}
