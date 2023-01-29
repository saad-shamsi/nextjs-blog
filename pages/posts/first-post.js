import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost(){
return <>
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
    
<h1>First Post</h1>
    <h2>
        <Link href="/"> ←Back to Home</Link>
        {/* <img src="/images/profile.jpg" alt="Saad Shamsi" /> */}

    </h2>
    </Layout>
    </>
}