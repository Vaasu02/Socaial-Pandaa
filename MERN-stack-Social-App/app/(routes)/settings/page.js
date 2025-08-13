export default function SettingsPage() {
  return (
    <div className="p-5 px-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your preferences, privacy, and notifications.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-medium text-slate-800">Preferences</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50">Toggle</button>
            </div>
            <div className="flex items-center justify-between">
              <span>Compact Layout</span>
              <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50">Toggle</button>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-medium text-slate-800">Notifications</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li><label className="inline-flex items-center gap-2"><input type="checkbox"/> Likes & Comments</label></li>
              <li><label className="inline-flex items-center gap-2"><input type="checkbox"/> New Followers</label></li>
              <li><label className="inline-flex items-center gap-2"><input type="checkbox"/> Feature updates</label></li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}


