import LoginForm from '@/components/LoginForm'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <LoginForm />
          <p className="mt-4 text-center text-sm">
            {"Don't have an account? "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">
              Register here
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}