import Navbar from '@/components/Navbar'

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <p className="text-xl">Welcome! You are logged in.</p>
      </main>
    </>
  )
}