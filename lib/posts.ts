import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')

export interface PostMetadata {
  title: string
  date: string
  description?: string
}

export interface Post extends PostMetadata {
  slug: string
  content: string
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // 날짜를 문자열로 변환
      let dateStr = data.date || ''
      if (dateStr instanceof Date) {
        dateStr = dateStr.toISOString().split('T')[0]
      } else if (typeof dateStr === 'string') {
        // 이미 문자열이면 그대로 사용
      } else {
        dateStr = ''
      }

      return {
        slug,
        content,
        title: data.title || '',
        date: dateStr,
        description: data.description,
      } as Post
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // 날짜를 문자열로 변환
  let dateStr = data.date || ''
  if (dateStr instanceof Date) {
    dateStr = dateStr.toISOString().split('T')[0]
  } else if (typeof dateStr === 'string') {
    // 이미 문자열이면 그대로 사용
  } else {
    dateStr = ''
  }

  return {
    slug,
    content,
    title: data.title || '',
    date: dateStr,
    description: data.description,
  } as Post
}

