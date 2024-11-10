// src/app/about/page.tsx
import Navbar from '../navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold text-blue-600">About Us</h1>
        <p className="mt-4 text-gray-700">
          This is the About page. 
        </p>
      </div>
    </div>
  );
}
