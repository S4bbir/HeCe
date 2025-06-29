
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AITools Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tools</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tools</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start text-gray-600 hover:text-gray-900">
                  Sign In
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
