import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <LoginForm />
        <p className="mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </main>
    </>
  )
}