import { getPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import PageTitleSetter from '@/components/PageTitleSetter'

export async function generateStaticParams() {
  try {
    const posts = getPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    return []
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html as any)
    .process(post.content)
  const contentHtml = String(processedContent)

  return (
    <>
      <PageTitleSetter title={post.title} />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600">
          <time dateTime={post.date}>{post.date}</time>
        </div>
        {post.description && (
          <p className="text-xl text-gray-700 mt-4">{post.description}</p>
        )}
      </header>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
    </>
  )
}

