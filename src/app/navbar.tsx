// src/app/navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <div className="space-x-4">
          <Link href="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
            About
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
