import { Link, Outlet } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-pitch-700 text-white sticky top-0 z-10 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 min-h-[44px]">
            <Trophy className="w-6 h-6 text-gold-400" aria-hidden />
            <span className="font-display font-bold text-lg leading-tight">
              PNG Soccer
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <Link
              to="/"
              className="px-3 py-2 rounded-lg hover:bg-pitch-600 min-h-[44px] flex items-center"
            >
              Home
            </Link>
            <Link
              to="/divisions"
              className="px-3 py-2 rounded-lg hover:bg-pitch-600 min-h-[44px] flex items-center"
            >
              Divisions
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-pitch-800 text-pitch-100 text-center text-sm py-4">
        <div className="max-w-5xl mx-auto px-4">
          Papua New Guinea Soccer Association &middot; Phase 1 preview
        </div>
      </footer>
    </div>
  );
}
