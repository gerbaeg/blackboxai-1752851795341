'use client'

import { useState } from 'react'

export default function StudentPortal() {
  const [language, setLanguage] = useState<'en' | 'id'>('id')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const content = {
    en: {
      title: 'USAKTI - Student Portal',
      subtitle: 'Universitas Trisakti Online Application',
      loginTitle: 'Student Login',
      newStudent: 'New Student Registration',
      emailLabel: 'Email/Student ID',
      passwordLabel: 'Password',
      loginButton: 'Login',
      contactTitle: 'Need Help?',
      contactEmail: 'Email: barensif@trisakti.ac.id',
      contactWA: 'WA: +62 881-6232-323 (Technical issues only)',
      contactPhone: 'Phone: 021-5663232 ext 8178',
      workingHours: 'Working hours: 8:00 - 16:00 (Closed during PPKM)',
      browserNotice: 'Best viewed in Firefox with resolution 1024x768+',
      copyright: 'Copyright © Universitas Trisakti. All rights reserved.'
    },
    id: {
      title: 'USAKTI - Portal Mahasiswa',
      subtitle: 'Aplikasi Online Universitas Trisakti',
      loginTitle: 'Login Mahasiswa',
      newStudent: 'Pendaftaran Mahasiswa Baru',
      emailLabel: 'Email pendaftar/NIM',
      passwordLabel: 'Password',
      loginButton: 'Masuk',
      contactTitle: 'Ada Kesulitan?',
      contactEmail: 'Email: barensif@trisakti.ac.id',
      contactWA: 'WA: +62 881-6232-323 (Untuk masalah teknis saja)',
      contactPhone: 'Telp: 021-5663232 ext 8178',
      workingHours: 'Jam kerja: 8:00 - 16:00 (Tutup karena PPKM)',
      browserNotice: 'Terbaik dilihat dalam browser firefox dengan resolusi 1024x768+',
      copyright: 'Copyright © Universitas Trisakti. All rights reserved.'
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-black">{currentContent.title}</h1>
              <p className="text-gray-600 mt-1">{currentContent.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'id'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* New Student Registration */}
          <div className="text-center mb-8">
            <a
              href="https://spmb.trisakti.ac.id"
              className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              {currentContent.newStudent}
            </a>
          </div>

          {/* Login Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6">{currentContent.loginTitle}</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.emailLabel}
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={language === 'en' ? 'Enter email or student ID' : 'Masukkan email atau NIM'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.passwordLabel}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder={language === 'en' ? 'Enter password' : 'Masukkan password'}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                {currentContent.loginButton}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{currentContent.contactTitle}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{currentContent.contactEmail}</p>
              <p>{currentContent.contactWA}</p>
              <p>{currentContent.contactPhone}</p>
              <p className="font-medium">{currentContent.workingHours}</p>
            </div>
          </div>

          {/* Browser Notice */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">{currentContent.browserNotice}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Trisakti University
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Jalan Kyai Tapa No. 1 Grogol, Jakarta Barat, Indonesia
            </p>
            <p className="text-sm text-gray-600">
              Phone: (62-21) 566 3232 | Fax: (62-21) 564 4270
            </p>
            <p className="text-xs text-gray-500 mt-4">
              {currentContent.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
