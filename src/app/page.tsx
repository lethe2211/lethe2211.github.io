'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language';

export default function Home() {
  const { t } = useLanguage();

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Go', 'Kotlin', 'SQL'],
    frameworks: ['Next.js', 'React', 'Spring Boot', 'Express.js'],
    tools: ['Docker', 'Kubernetes', 'Git', 'Jenkins', 'Terraform'],
    cloud: ['AWS', 'GCP', 'Azure'],
    certifications: ['CKS', 'CKA', 'CKAD', 'TOEIC 900', '情報処理安全確保支援士']
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          lethe2211
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('home.title')}
        </p>
      </section>

      {/* Career Summary */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t('home.careerSummary.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('home.careerSummary.description')}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t('home.skills.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                {t('home.skills.languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                {t('home.skills.frameworks')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                {t('home.skills.tools')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">
                {t('home.skills.cloud')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              {t('home.skills.certifications')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.certifications.map((cert) => (
                <span key={cert} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Portfolio and Links */}
      <section className="grid md:grid-cols-2 gap-6">
        <Link href="/portfolio" className="block">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('nav.portfolio')}
            </h2>
            <p className="text-gray-600">
              {t('portfolio.title')}
            </p>
          </div>
        </Link>

        <Link href="/links" className="block">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('nav.links')}
            </h2>
            <p className="text-gray-600">
              {t('links.title')}
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
