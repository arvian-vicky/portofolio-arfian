import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = ['/public/img/coding1.jpg', '/public/img/coding2.jpg', '/public/img/coding3.jpg'];

export const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            {t('hero.greeting')} <span className="text-blue-600">{t('hero.name')}</span>
          </h1>
          <p className="text-xl font-light md:text-2xl text-white/90">{t('hero.role')}</p>
          <Button size="lg" onClick={scrollToPortfolio} className="px-8 py-6 mt-8 text-lg font-medium bg-blue-600 hover:bg-primary/90 text-primary-foreground">
            {t('hero.cta')}
          </Button>
        </div>

        <button onClick={scrollToPortfolio} className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {heroImages.map((_, index) => (
          <button key={index} onClick={() => setCurrentImage(index)} className={`h-2 rounded-full transition-all ${index === currentImage ? 'w-8 bg-blue-600' : 'w-2 bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
};
