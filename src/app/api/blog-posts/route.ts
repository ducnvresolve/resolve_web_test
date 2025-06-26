import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts } from '@/utils/blogger'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lng = searchParams.get('lng') || 'en'

  try {
    const posts = await getBlogPosts(lng)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
} 