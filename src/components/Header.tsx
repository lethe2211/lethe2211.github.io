'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-100 hover:text-gray-300 transition-colors">
            lethe2211
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.portfolio')}
              </Link>
              <Link href="/links" className="text-gray-300 hover:text-white transition-colors">
                {t('nav.links')}
              </Link>
            </div>
            
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
                className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                aria-label={t('language.switch')}
              >
                <option value="ja">{t('language.ja')}</option>
                <option value="en">{t('language.en')}</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}