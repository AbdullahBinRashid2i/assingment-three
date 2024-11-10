// src/app/page.tsx
import Navbar from './navbar';
import Footer from './footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-8 flex-1">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Welcome to My Website
        </h1>
        <p className="text-xl text-center text-gray-700">
          This is the home page. Here, 
        </p>
      </div>
      <Footer />
    </div>
  );
}
