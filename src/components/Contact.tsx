import { useState } from 'react';

import { useLanguage } from '../context/LanguageContext';
import { toast } from '../hooks/use-toast';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/arvian-nurdavicky/', label: 'LinkedIn' },
  { icon: Github, url: 'https://github.com/arvian-vicky', label: 'GitHub' },
  { icon: Instagram, url: 'https://www.instagram.com/arvian_v?igsh=MTQ5c2xlbzcyZ2QxMg%3D%3D&utm_source=qr', label: 'Instagram' },
  { icon: MessageCircle, url: 'https://wa.me/+6282319100758', label: 'WhatsApp' },
];

export const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await fetch('https://api.web3forms.com/submit', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         access_key: '9c2d3e04-e2c8-4716-ae94-c6ceb472dfe3',
  //         name: formData.name,
  //         email: formData.email,
  //         subject: formData.subject,
  //         message: formData.message,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       toast({
  //         title: t('contact.success'),
  //         description: t('contact.success'),
  //       });
  //       setFormData({ name: '', email: '', subject: '', message: '' });
  //     } else {
  //       throw new Error(data.message || 'Failed to send message');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     toast({
  //       title: t('contact.error'),
  //       description: 'Something went wrong. Please try again later.',
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <section id="contact" className="px-4 py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-foreground">{t('contact.title')}</h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          {/* <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder={t('contact.name')} value={formData.name} onChange={handleChange} required className="bg-background border-border" />
              <Input type="email" name="email" placeholder={t('contact.email')} value={formData.email} onChange={handleChange} required className="bg-background border-border" />
              <Input name="subject" placeholder={t('contact.subject')} value={formData.subject} onChange={handleChange} required className="bg-background border-border" />
              <Textarea name="message" placeholder={t('contact.message')} value={formData.message} onChange={handleChange} required rows={6} className="resize-none bg-background border-border" />
              <Button type="submit" size="lg" disabled={loading} className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </div> */}

          {/* Social Links & Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 transition-all border rounded-lg bg-background border-border hover:border-blue-600 hover:scale-105 group">
                    <social.icon className="w-6 h-6 text-blue-600 transition-transform group-hover:scale-110" />
                    <span className="font-medium text-foreground">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-background border-border">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
