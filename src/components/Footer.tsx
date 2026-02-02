import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 border-t border-border bg-background">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} {t('Arfian')}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
