
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 mt-12 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div>
                    &copy; {new Date().getFullYear()} Nucleus. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                    <a href="mailto:ralph2167793145@outlook.com" className="hover:text-gray-300">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
