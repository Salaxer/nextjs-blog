import Layout from '../../components/layout'
import { getCharacterData, getAllPostIds } from '../../lib/api'

import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link';
// Obtain the statics phats from the file on posts/***.md and assign to the props
export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: true
    }
}

// obtian the static props and return anoter one
export async function getStaticProps({ params }) {
    const postData = await getCharacterData(params.id);
    return {
        props: {
            postData,
        }
    }
}

export default function Some({ postData }) {
    if (!postData) {
        return (
            <Layout>
                <p>There's no more items :c</p>
            </Layout>
        );
    }
    return (
        <Layout img={postData.image} title={postData.title}>
            <p style={{
                fontSize: "1.2rem",
            }}>
                ${postData.price}
            </p>
            <div style={{margin:0}} className={utilStyles.backToHome}>
                {postData.id == 1 ? <p>⬅ Back product</p>: 
                <Link href={`/products/${postData.id - 1}`}>
                    <a>⬅ Back product</a>
                </Link>}
                <Link href={`/products/${postData.id + 1}`}>
                    <a>Next product➡</a>
                </Link>
            </div>
            <p>{postData.description}</p>
        </Layout>
    )
}
