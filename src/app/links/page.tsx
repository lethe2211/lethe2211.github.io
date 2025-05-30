'use client';

import { useLanguage } from '@/lib/language';

export default function Links() {
  const { t } = useLanguage();

  const links = [
    {
      name: t('links.github'),
      url: 'https://github.com/lethe2211',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: t('links.linkedin'),
      url: 'https://www.linkedin.com/in/shuhei-shogen-833397a3/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: t('links.qiita'),
      url: 'https://qiita.com/lethe2211',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.57 8.343a3.653 3.653 0 0 1 1.49-2.984 3.652 3.652 0 0 1 6.344 2.515v8.292a3.653 3.653 0 0 1-1.49 2.984 3.652 3.652 0 0 1-6.344-2.515V8.343zm16.87 0a3.653 3.653 0 0 0-1.49-2.984 3.652 3.652 0 0 0-6.344 2.515v8.292a3.653 3.653 0 0 0 1.49 2.984 3.652 3.652 0 0 0 6.344-2.515V8.343z"/>
        </svg>
      ),
    },
    {
      name: t('links.hatena'),
      url: 'https://lethe2211.hatenablog.com/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-22C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 7.5h3v3h-3v-3zm0 4.5h3v3h-3v-3z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t('links.title')}
        </h1>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="text-gray-600">
                  {link.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {link.name}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {link.url}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}