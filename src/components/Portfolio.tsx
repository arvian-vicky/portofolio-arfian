import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Download, Clock } from 'lucide-react';

import mulqiImage from '../public/img/mulqii.png';
import efoImage from '../public/img/EFO.png';

export interface Project {
  id: number;
  name: string;
  description: {
    id: string;
    en: string;
  };
  image: string;
  url: string;
  downloadUrl: string;
}

const websiteProjects = [
  {
    id: 1,
    name: 'Mulqi Gruop',
    description: {
      id: 'Website resmi Mulqi Group - dibangun untuk klien DiGiat sebagai Fullstack Developer. Menggunakan teknologi modern untuk menghadirkan tampilan profesional dan responsif.',
      en: 'Comprehensive ERP (Enterprise Resource Planning) system for clinic management at PT Gerin Mitra Husada, Jakarta. Developed as a Fullstack Developer using Laravel and Bootstrap 5. Includes modules for patient management, appointment scheduling, inventory tracking, billing, and chat via Pusher. Used internally by clinic staff and administrators.',
    },
    image: mulqiImage,
    url: 'https://mulqigroup.com/',
  },
  {
    id: 2,
    name: 'Web EFO (Esports Football One)',
    description: {
      id: 'Frontend untuk EFO — platform organisasi esports. Merancang antarmuka responsif dan interaktif menggunakan Bootstrap dan Laravel untuk manajemen tim serta pelacakan pertandingan secara real-time. Digunakan secara internal oleh admin dan pemain EFO.',
      en: 'Frontend development for EFO – an esports organization platform. Designed a responsive and interactive UI with Bootstrap and Laravel for real-time team management and match tracking. Used internally by EFO’s admin and players.',
    },
    image: efoImage,
    url: 'https://efo.id/',
  },
];

const mobileProjects = [
  {
    id: 1,
    name: 'Hemoku',
    description: {
      id: 'Pengembangan backend untuk aplikasi Hemoku bekerja sama dengan Stikes Widya Dharma Husada dan dosen Universitas Pamulang. Fokus saya adalah membangun backend menggunakan Laravel untuk skrining anemia dan manajemen pasien. Segera hadir di Play Store.',
      en: 'Backend development for Hemoku mobile app in collaboration with Stikes Widya Dharma Husada and lecturers from Universitas Pamulang. My role focused on building the backend with Laravel for anemia screening and patient management. Available soon on Play Store.',
    },
    image: '/img/hemoku.jpeg',
    downloadUrl: 'soon',
  },
  {
    id: 2,
    name: 'M-Diabetic Care',
    description: {
      id: 'Sistem backend untuk aplikasi M-Diabetic Care bekerja sama dengan Stikes Widya Dharma Husada dan dosen Universitas Pamulang — alat bantu skrining dan manajemen diabetes. Fokus saya adalah membangun backend menggunakan Laravel dengan performa dan keamanan tinggi. Segera hadir di Play Store.',
      en: 'Backend system for M-Diabetic Care mobile app in collaboration with Stikes Widya Dharma Husada and lecturers from Universitas Pamulang — a tool for diabetes screening and management. My role focused on building the backend with Laravel with emphasis on performance and security. Coming soon on Play Store.',
    },
    image: '/img/diabetic.jpeg',
    downloadUrl: 'soon',
  },
  {
    id: 3,
    name: 'Gunita',
    description: {
      id: 'Aplikasi mobile fullstack untuk manajemen tanaman herbal di Desa Gunaksa, Bali. Dikembangkan bekerja sama dengan mahasiswa dan dosen Universitas Udayana serta pemerintah daerah setempat. Saya membangun backend dengan Go dan berkontribusi sebagian pada tampilan menggunakan Flutter. Fitur mencakup database tanaman, konsultasi, dan e-commerce.',
      en: 'Fullstack mobile app for herbal plant management in Desa Gunaksa, Bali. Developed in collaboration with students and lecturers from Universitas Udayana and local government. I built the backend with Go and contributed partially to the frontend using Flutter. Features include plant database, consultation, and e-commerce.',
    },
    image: '/img/gunita.jpeg',
    downloadUrl: 'soon',
  },
];

export const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'website' | 'mobile'>('website');

  type TabId = 'website' | 'mobile';
  const tabs: { id: TabId; label: string }[] = [
    { id: 'website', label: t('portfolio.website') },
    { id: 'mobile', label: t('portfolio.mobile') },
  ];

  const getProjects = () => {
    switch (activeTab) {
      case 'website':
        return websiteProjects;
      case 'mobile':
        return mobileProjects;
    }
  };

  const isWebsiteTab = activeTab === 'website';

  return (
    <section id="portfolio" className="px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center md:text-5xl text-foreground">{t('portfolio.title')}</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {tabs.map((tab) => (
            <Button key={tab.id} variant={activeTab === tab.id ? 'default' : 'outline'} onClick={() => setActiveTab(tab.id)} className="px-6 bg-blue-600">
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getProjects().map((project) => (
            <div key={project.id} className="flex flex-col overflow-hidden transition-all border shadow-lg group animate-fade-in bg-card rounded-xl border-border hover:border-blue-600 hover:scale-105">
              <div className={`overflow-hidden ${isWebsiteTab ? 'aspect-video' : 'aspect-[9/16] bg-muted flex items-center justify-center'}`}>
                <img src={project.image} alt={project.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="text-justify text-muted-foreground">{project.description[language]}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4">
                  {activeTab === 'website' && (
                    <Button variant="outline" className="w-full gap-2 text-blue-600 border-blue-600 hover:bg-primary hover:text-primary-foreground" onClick={() => window.open(project.url, '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      {t('portfolio.liveDemo')}
                    </Button>
                  )}

                  {activeTab === 'mobile' &&
                    (project.downloadUrl === 'soon' ? (
                      <Button variant="outline" disabled className="w-full gap-2 cursor-not-allowed border-muted-foreground text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {language === 'id' ? 'Segera Hadir di Play Store' : 'Coming Soon on Play Store'}
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open(project.downloadUrl, '_blank')}>
                        <Download className="w-4 h-4" />
                        {t('portfolio.download')}
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
