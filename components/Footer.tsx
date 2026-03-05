export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-newspaper-border text-white mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="border-t-2 border-white pt-4 mb-4">
          <p className="font-serif text-lg mb-2">THE DAILY CV</p>
          <p className="text-sm">All Rights Reserved © {currentYear}</p>
        </div>
        <div className="text-xs text-gray-300">
          <p>Published Daily | Editor-in-Chief: Tu Nombre</p>
          <p className="mt-2">Designed for Vercel Deployment</p>
        </div>
      </div>
    </footer>
  );
}
