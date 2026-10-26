import { POSTS_URL } from '../posts'


export default async function getPost(id: number) {
    const res = await fetch(`${POSTS_URL}/${id}`)

    if (!res.ok) {
    throw new Error('Failed to fetch post')
    }
  
    return res.json()
}
