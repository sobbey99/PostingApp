'use client'

import Post from '@/app/components/Post'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type URL = {
    params: {
        slug: string
    }
}



const fetchDetails = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`)
    return response.data
}



export default function PostDetail(url: URL) {
    const {data, isLoading} = useQuery({
        queryFn: () => fetchDetails(url.params.slug),
        queryKey: ['detail-post']
    })
    if(isLoading) return 'Loading ...'
    console.log(data)
    return (
        <div>
            <Post
             id={data?.id}
             name={data.user.name}
             avatar={data.user.image}
             postTitle={data.title}
             Comment={data.Comment}
            />
        </div>
    )
}