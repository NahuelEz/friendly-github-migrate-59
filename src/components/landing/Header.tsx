
import { Link } from 'react-router-dom';
import { MainNav } from '../ui/MainNav';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link to="/" className="font-bold text-xl mr-6">
          SOCIAL AI
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
