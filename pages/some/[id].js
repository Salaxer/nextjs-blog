import Layout from '../../components/layout'
import { getCharacterData, getAllPostIds } from '../../lib/api'

// Obtain the statics phats from the file on posts/***.md and assign to the props
export async function getStaticPaths() {

    console.log('im in getStaticPaths');
    const paths = await getAllPostIds();
    console.log('the paths: : : ', paths);

    return {
        paths,
        fallback: true
    }
}

// obtian the static props and return anoter one
export async function getStaticProps({ params }) {
    console.log('im in getStaticProps');
    console.log('Here the id received:: ',params.id);
    const postData = await getCharacterData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Some({ postData }) {
    return (
        <Layout>
            <p>Hi, How are {postData ? postData.name : "Nothing"}?</p>
        </Layout>
    )
}



  
// interface Info{
//     count: number,
//     pages: number,
//     next?: string,
//     prev?: string
// }

// interface Origin{
//     name: string,
//     url: string,
// }

// interface Location{
//     name: string,
//     url: string,
// }

// interface Character{
//     id: number,
//     name: string,
//     status: string,
//     species: string,
//     type: string,
//     gender: string,
//     origin: Origin
//     location: Location,
//     image: string,
//     episode: string[]
//     url: string,
//     created: string
//   }

// interface Response{
//     info:  Info,
//     results: Character[],
// }