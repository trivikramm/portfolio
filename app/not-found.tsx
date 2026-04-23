import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-bold text-brand-normal/20 tracking-tighter">404</h1>
      <h2 className="text-3xl font-light text-primary mt-8 mb-4">Page Not Found</h2>
      <p className="text-secondary font-light max-w-md mb-10 leading-relaxed">
        The page you are looking for does not exist or has been moved. Let's get you back on track.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3.5 bg-brand-dark text-white rounded-md hover:bg-opacity-90 transition-all text-sm font-medium"
      >
        Back to Home
      </Link>
    </div>
  )
}