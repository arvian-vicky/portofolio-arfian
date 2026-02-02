import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="container px-4 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-600 text-foreground">{t('Arfian Nurdavicky')}</div>

          <div className="items-center hidden gap-8 md:flex">
            <button onClick={() => scrollToSection('home')} className="transition-colors text-foreground hover:text-blue-600">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="transition-colors text-foreground hover:text-blue-600">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="transition-colors text-foreground hover:text-blue-600">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors text-foreground hover:text-blue-600">
              {t('nav.contact')}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-1 hover:bg-muted">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
