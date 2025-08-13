import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="p-5 px-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800">Community</h1>
        <p className="text-slate-600 mt-1">Discover discussions, trends, and community guidelines.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-medium text-slate-800">Trending Topics</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Getting Started','Show & Tell','Tips & Tricks','Q&A','Feedback'].map((t)=> (
                <span key={t} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 border border-blue-100">#{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-medium text-slate-800">Latest Announcements</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              <li>Welcome to the new community space.</li>
              <li>Share your first post and get feedback.</li>
              <li>Be kind, stay on topic, and have fun!</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-medium text-slate-800">Start Posting</h3>
            <p className="text-slate-600 mt-1">Have something to share? Head over and write your first post.</p>
            <Link href="/home" className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Go to Home
            </Link>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-medium text-slate-800">Guidelines</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
              <li>Respectful and constructive discussion.</li>
              <li>No spam or self-promotion without value.</li>
              <li>Use clear titles and tags.</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}


