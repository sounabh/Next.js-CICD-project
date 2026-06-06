import RegisterForm from '@/components/RegisterForm'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold mb-8">Register</h1>
        <RegisterForm />
        <p className="mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </main>
    </>
  )
}