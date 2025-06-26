import type { BaseRecord } from "@/types/base.types"

interface BlogPost {
  title: string
  content: string
  url: string
  published: string
}

export async function getBlogPosts(lng: string): Promise<BaseRecord<any>[]> {
  const BLOG_ID = lng === 'en' ? '186420997559902444' : '4232395561543789245'
  const API_KEY = 'AIzaSyBKeTPE9dlDSSPAs3cy7NL7IaaNBz_BmIg'
  
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=5`
    )
    const data = await response.json()
    
    return data.items.map((item: any) => ({
      title: {
        en: item.title,
        vi: item.title // You might want to handle translations differently
      },
      content: item.content,
      url: item.url,
      published: item.published
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
} 