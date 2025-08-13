import Link from 'next/link'

export default function ToolPage() {
  return (
    <div className="p-5 px-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800">Tools</h1>
        <p className="text-slate-600 mt-1">Quick utilities and experimental features to enhance your workflow.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { title: 'Post Composer', desc: 'Draft and format posts before publishing.', status: 'Available' },
          { title: 'Image Uploader', desc: 'Upload and attach images to your posts.', status: 'Coming soon' },
          { title: 'Analytics', desc: 'Track engagement across your posts.', status: 'Coming soon' },
          { title: 'Bookmarks', desc: 'Save posts to revisit later.', status: 'Coming soon' },
          { title: 'Hashtag Helper', desc: 'Discover popular tags for reach.', status: 'Coming soon' },
          { title: 'Scheduler', desc: 'Schedule posts to publish later.', status: 'Coming soon' },
        ].map((tool) => (
          <div key={tool.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-slate-800">{tool.title}</h2>
              <span className={`text-xs rounded-full px-2 py-1 border ${tool.status === 'Available' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>{tool.status}</span>
            </div>
            <p className="mt-2 text-slate-600">{tool.desc}</p>
          </div>
        ))}
      </section>

      <div className="mt-8">
        <Link href="/home" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Go to Home
        </Link>
      </div>
    </div>
  )
}


