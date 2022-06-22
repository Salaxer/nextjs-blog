
export async function getCharacterData(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {method: 'GET'})
    return await res.json()
}
export async function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://fakestoreapi.com/products/')
    const posts = await res.json()
    return posts.map(post => {
        return {
            params: {
                id: post.id.toString(),
                length: posts.length,
            }
        }
    })
}