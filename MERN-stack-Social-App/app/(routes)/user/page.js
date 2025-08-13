"use client"
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

export default function UserPage() {
  const { user } = useUser();
  return (
    <div className="p-5 px-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-800">Your Profile</h1>
        <p className="text-slate-600 mt-1">View your account details and profile information.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4 lg:col-span-2">
          {user?.imageUrl && (
            <Image src={user.imageUrl} alt={user?.fullName || 'User'} width={72} height={72} className="rounded-full"/>
          )}
          <div>
            <h2 className="text-xl font-medium text-slate-800">{user?.fullName || 'Guest'}</h2>
            <p className="text-slate-600">{user?.primaryEmailAddress?.emailAddress || 'Not signed in'}</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-medium text-slate-800">Account</h3>
          <ul className="mt-2 text-slate-700 space-y-2">
            <li>Status: {user ? 'Signed in' : 'Signed out'}</li>
            <li>User ID: <span className="font-mono text-xs">{user?.id || '-'}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}


