import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center px-7 lg:px-0 mt-32">
      <div className="w-full mb-10 text-center">
          <h1 className="font-bold text-2xl lg:text-4xl mb-10">404 | Not Found</h1>
          <Link href="/" className="text-orange-400 hover:text-orange-600 after:content-['_↗'] hover:underline transition duration-300">Return Home</Link>
      </div>
    </div>
  );
}