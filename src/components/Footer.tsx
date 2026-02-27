export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-20 px-6 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-mono">
            © {currentYear} Anginat. Crafted with{' '}
            <span className="text-pink-400">♥</span> and{' '}
            <span className="text-cyan-400">code</span>
          </div>
          <div className="text-slate-500 text-sm font-mono">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}