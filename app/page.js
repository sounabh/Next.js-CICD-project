import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to MyApp</h1>
        <p className="text-xl mb-8">A Next.js app with CI/CD Pipeline</p>
            <p className="text-xl mb-8 text-center">By sounabh</p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </main>
    </>
  )
}