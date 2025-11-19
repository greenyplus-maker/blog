export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Hello</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          A space to share stories about development and daily life.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
          <p>
            This blog is a space to record and share development experiences, what I've learned, 
            and daily thoughts. It mainly covers web development, programming, and technology.
          </p>
          <p>
            I'd like to share insights and experiences gained from writing code, solving problems, 
            and learning new things with you.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• React</li>
              <li>• Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Node.js</li>
              <li>• Express</li>
              <li>• Database</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tools</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Git</li>
              <li>• VS Code</li>
              <li>• Docker</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="text-gray-700">
            Feel free to reach out if you have any questions or inquiries.
          </p>
        </div>
      </section>
    </div>
  )
}

