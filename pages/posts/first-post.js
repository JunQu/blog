import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPage() {
  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a> Back to Home</a>
      </Link>
    </h2>
    <div>
      <img src="/images/135645420.jpg" alt="ai" />
      <Image src="/images/135645420.jpg" height={144} width={144} alt="ai" />
    </div>
  </Layout>
}
