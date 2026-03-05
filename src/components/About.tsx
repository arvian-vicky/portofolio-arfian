import { useLanguage } from '../context/LanguageContext';
import { Download, Brain, Users, Lightbulb, Clock, MessageSquare } from 'lucide-react';
import { SiLaravel, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMysql, SiBootstrap, SiGit, SiGo } from 'react-icons/si';

const skills = [
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiGo, name: 'Go' },
  { icon: SiLaravel, name: 'Laravel' },
  { icon: SiBootstrap, name: 'Bootstrap' },
  { icon: SiMysql, name: 'SQL / MySQL' },
  { icon: SiReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiGit, name: 'Git' },
];

const softSkills = [
  { icon: Brain, name: 'Problem Solving' },
  { icon: Users, name: 'Team Collaboration' },
  { icon: Lightbulb, name: 'Creative Thinking' },
  { icon: Clock, name: 'Time Management' },
  { icon: MessageSquare, name: 'Communication' },
];

export const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="px-4 py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* Two-column layout: Photo + About text */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative overflow-hidden border-4 border-blue-600 shadow-2xl aspect-square rounded-2xl">
                <img src="/img/Arfian.jpeg" alt="Arfian Nurdavicky" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          </div>

          {/* About text */}
          <div className="space-y-6 text-justify animate-slide-up">
            <h2 className="text-4xl font-bold md:text-5xl text-foreground">{t('about.title')}</h2>

            <h3 className="text-lg font-semibold tracking-wide text-blue-600 uppercase">{language === 'id' ? 'PENGEMBANG PERANGKAT LUNAK' : 'SOFTWARE DEVELOPER'}</h3>

            {language === 'id' ? (
              <>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Halo, nama saya <span className="font-semibold text-foreground">Arfian Nurdavicky</span>. Saya seorang pengembang perangkat lunak yang senang membuat website, aplikasi, dan sistem yang andal serta mudah digunakan.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Saya berfokus pada penulisan kode yang bersih dan mudah dirawat, merancang sistem dengan performa tinggi, serta menghadirkan solusi yang benar-benar menjawab kebutuhan pengguna tanpa kompleksitas yang tidak perlu.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">Tujuan saya adalah menciptakan produk digital yang memadukan desain yang baik, fungsionalitas, dan pengalaman pengguna yang mulus.</p>
              </>
            ) : (
              <>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hello, my name is <span className="font-semibold text-foreground">Arfian Nurdavicky</span>. I'm a software developer who enjoys creating websites, applications, and systems that are both reliable and easy to use.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I focus on writing clean and maintainable code, designing systems that perform well, and delivering solutions that meet real needs without unnecessary complexity.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">My goal is to craft digital products that combine good design, practicality, and seamless user experiences.</p>
              </>
            )}

            {/* Contact Button */}
            <a href="/resume/Resume_Arfian Nurdavicky.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-primary/90 text-primary-foreground">
              <Download className="w-5 h-5" />
              {language === 'id' ? 'Unduh Resume' : 'Download Resume'}
            </a>
          </div>
        </div>

        {/* Skills Section below the two-column layout */}
        <div className="mt-16 space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{language === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 transition-all border rounded-lg bg-background border-border hover:border-blue-600 hover:scale-105">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">{language === 'id' ? 'Kemampuan Lain' : 'Soft Skills'}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 transition-all border rounded-lg bg-background border-border hover:border-blue-600 hover:scale-105">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium text-center">
                    {language === 'id'
                      ? {
                          'Problem Solving': 'Pemecahan Masalah',
                          'Team Collaboration': 'Kolaborasi Tim',
                          'Creative Thinking': 'Berpikir Kreatif',
                          'Time Management': 'Manajemen Waktu',
                          Communication: 'Komunikasi',
                        }[skill.name] || skill.name
                      : skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
