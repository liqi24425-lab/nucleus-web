
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:text-cyan-400 transition">
                    <Sparkles className="w-6 h-6 text-cyan-500" />
                    <span>Nucleus</span>
                </Link>
                <div className="flex gap-6 text-sm font-medium">
                    <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
                    <Link to="/support" className="text-gray-300 hover:text-white transition">Support</Link>
                    <Link to="/privacy" className="text-gray-300 hover:text-white transition">Privacy</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
