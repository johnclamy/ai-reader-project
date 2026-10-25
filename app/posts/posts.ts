const POSTS_URL = 'https://dummyjson.com/posts'


export default async function getPosts() {
  const res = await fetch(POSTS_URL)

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return res.json()
}
