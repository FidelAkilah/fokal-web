import React from 'react';
import { Shield, Eye, Bell, Activity, Download, Star, Users, Zap, CheckCircle, ArrowRight, Smartphone, Brain, Lock } from 'lucide-react';

const FokalLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
                <img
                  src="../logo.png"
                  alt="Fokal Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Fokal
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tentang" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</a>
              <a href="#fitur" className="text-gray-700 hover:text-purple-600 transition-colors">Fitur</a>
              <a href="#inovasi" className="text-gray-700 hover:text-purple-600 transition-colors">Inovasi</a>
              <a href="#download" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  <span>Perlindungan AI Terdepan</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Lindungi Anak dari
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent block">
                    Konten Berbahaya
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fokal adalah solusi parental control berbasis AI Vision yang mendeteksi konten pornografi dan pornoteks secara real-time langsung dari layar perangkat anak Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2 group">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download Sekarang</span>
                </button>
                <button className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">Dipercaya ribuan keluarga</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Status Perlindungan</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Deteksi Visual</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Deteksi Teks</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Notifikasi Real-time</span>
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">56.23%</div>
              <div className="text-gray-600">Peningkatan kasus kekerasan seksual (2020-2024)</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">13.20%</div>
              <div className="text-gray-600">Pelaku adalah anak berusia 0-17 tahun</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">5.5M+</div>
              <div className="text-gray-600">Anak positif terpapar pornografi dalam 4 tahun</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">79.5%</div>
              <div className="text-gray-600">Penetrasi internet Indonesia 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-r from-purple-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Mengapa Fokal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indonesia menghadapi darurat kekerasan seksual dengan peningkatan kasus yang mengkhawatirkan. 
              Fokal hadir sebagai solusi inovatif untuk melindungi anak-anak dari paparan konten berbahaya.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Masalah Nyata</h3>
              <p className="text-gray-600">
                Studi menunjukkan remaja yang terpapar pornografi 2-3 kali lebih mungkin melakukan kekerasan seksual 
                dan cenderung melaporkan perilaku seksual berisiko tinggi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Akses Mudah</h3>
              <p className="text-gray-600">
                Dengan penetrasi internet 79.5% dan jutaan konten pornografi di media sosial, 
                anak-anak semakin mudah terpapar konten berbahaya.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Solusi Terbatas</h3>
              <p className="text-gray-600">
                Aplikasi parental control konvensional hanya memblokir URL atau aplikasi, 
                tidak dapat menyaring konten berbahaya yang sudah masuk ke aplikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Fitur Unggulan Fokal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi AI Vision terdepan yang bekerja secara real-time untuk melindungi anak Anda
            </p>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Deteksi Konten Visual</h3>
                <p className="text-lg text-gray-600">
                  Menggunakan teknologi YOLO v5 dan CNN Grid-Based Cropping untuk mendeteksi 
                  konten pornografi dalam gambar dan video secara akurat dan cepat.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Deteksi real-time pada semua aplikasi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Akurasi tinggi dengan false positive rendah</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Adaptif terhadap teknik penyamaran baru</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center space-y-4">
                    <Brain className="w-12 h-12 text-purple-600 mx-auto" />
                    <h4 className="font-semibold text-gray-800">AI Vision Detection</h4>
                    <div className="space-y-2">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Ignore</div>
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Review</div>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Alert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 lg:order-1">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Deteksi Pornoteks</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">OCR Processing</span>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">NLP Analysis</span>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">Threshold Check</span>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Deteksi Teks Eksplisit</h3>
                <p className="text-lg text-gray-600">
                  Menggunakan OCR (Easy OCR/Tesseract) dan model NLP untuk mengidentifikasi 
                  dan mengklasifikasikan konten teks yang mengandung muatan eksplisit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Ekstraksi teks dari gambar dan screenshot</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Analisis konteks dengan NLP</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Skor probabilitas akurat</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Notifikasi Instan</h3>
                <p className="text-lg text-gray-600">
                  Sistem peringatan langsung ke aplikasi orang tua dengan laporan detail 
                  untuk tindakan preventif yang cepat dan tepat.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Notifikasi real-time ke ponsel orang tua</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Laporan lengkap dengan screenshot</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Saran tindakan pencegahan</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800">Peringatan Terdeteksi</h4>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-red-800 font-medium">Konten tidak pantas terdeteksi di Instagram</p>
                      <p className="text-xs text-red-600 mt-1">Baru saja • Tingkat: Tinggi</p>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-8 lg:order-1">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Activity Log</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm font-medium">Instagram</p>
                          <p className="text-xs text-gray-500">2 jam yang lalu</p>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                        <div>
                          <p className="text-sm font-medium">WhatsApp</p>
                          <p className="text-xs text-gray-500">3 jam yang lalu</p>
                        </div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm font-medium">YouTube</p>
                          <p className="text-xs text-gray-500">5 jam yang lalu</p>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Riwayat Aktivitas</h3>
                <p className="text-lg text-gray-600">
                  Pencatatan lengkap aktivitas anak dengan timestamp, aplikasi yang digunakan, 
                  dan hasil deteksi untuk monitoring yang komprehensif.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Log lengkap dengan timestamp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Screen time per aplikasi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Analisis pola penggunaan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="inovasi" className="py-20 bg-gradient-to-r from-purple-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Inovasi yang Membedakan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fokal menghadirkan terobosan baru dalam teknologi parental control dengan pendekatan AI Vision Overlay
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">AI Vision Overlay</h3>
              <p className="text-lg text-gray-600">
                Berbeda dari aplikasi parental control lainnya yang hanya memblokir URL atau aplikasi, 
                Fokal bekerja layaknya ponsel anak sedang melakukan share screen dengan AI Vision yang 
                mampu menganalisis konten secara real-time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                    <p className="text-gray-600">Analisis konten langsung dari layar tanpa delay</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adaptive Learning</h4>
                    <p className="text-gray-600">Sistem belajar dari pola dan teknik penyamaran baru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Platform</h4>
                    <p className="text-gray-600">Bekerja di semua aplikasi dan platform media sosial</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">AI Vision Overlay</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Screen Analysis</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Content Detection</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Real-time Alert</span>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Perbandingan dengan Kompetitor</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Fitur</th>
                    <th className="text-center py-4 px-4 font-semibold text-purple-600">Fokal</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Qustodio</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Bark</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Norton Family</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">AI Vision Overlay</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-red-500">✕</td>
                    <td className="py-4 px-4 text-center text-red-500">✕</td>
                    <td className="py-4 px-4 text-center text-red-500">✕</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">Deteksi Konten Real-time</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-orange-500">Terbatas</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-orange-500">Terbatas</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">Deteksi Pornoteks</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-red-500">✕</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-red-500">✕</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">Notifikasi Instan</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-orange-500">Delayed</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">Cross-Platform Detection</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-orange-500">Terbatas</td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center text-orange-500">Terbatas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Manfaat untuk Keluarga</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fokal memberikan manfaat nyata untuk semua anggota keluarga dan masyarakat
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Untuk Orang Tua</h3>
              <p className="text-gray-600">
                Meningkatkan rasa keamanan anak dalam menggunakan gawai serta mampu mengambil 
                langkah preventif dikarenakan notifikasi terjadi secara instan.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Ketenangan pikiran</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Tindakan preventif cepat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Monitoring komprehensif</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Untuk Anak</h3>
              <p className="text-gray-600">
                Menciptakan lingkungan digital yang positif sehingga berkurangnya potensi terpapar 
                informasi atau konten yang negatif serta melindungi dari dampak psikologis dan sosial.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Lingkungan digital aman</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Perlindungan psikologis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Pertumbuhan sehat</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Untuk Masyarakat</h3>
              <p className="text-gray-600">
                Meningkatkan literasi digital atas pentingnya pengawasan orang tua serta mendorong 
                inovasi dengan implementasi AI dalam berbagai aspek kehidupan.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Literasi digital</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Inovasi teknologi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Kualitas hidup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Cara Kerja Fokal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses deteksi yang canggih namun mudah dipahami
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Screen Capture</h3>
              <p className="text-gray-600">
                Fokal melakukan capture layar secara real-time untuk menganalisis konten yang ditampilkan
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI Analysis</h3>
              <p className="text-gray-600">
                Model AI menganalisis gambar dan teks menggunakan YOLO v5, CNN, dan NLP untuk deteksi konten
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Decision Making</h3>
              <p className="text-gray-600">
                Sistem membuat keputusan berdasarkan threshold: Ignore, Review, atau Alert
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Instant Alert</h3>
              <p className="text-gray-600">
                Notifikasi langsung dikirim ke orang tua dan activity log disimpan untuk review
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Teknologi yang Digunakan</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto">
                    <Brain className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">YOLO v5</h4>
                  <p className="text-sm text-gray-600">Object detection untuk identifikasi visual</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">CNN</h4>
                  <p className="text-sm text-gray-600">Grid-based cropping untuk analisis detail</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">OCR</h4>
                  <p className="text-sm text-gray-600">Easy OCR & Tesseract untuk ekstraksi teks</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">NLP</h4>
                  <p className="text-sm text-gray-600">Natural Language Processing untuk analisis teks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Siap Melindungi Anak Anda?
              </h2>
              <p className="text-xl text-purple-100">
                Download Fokal sekarang dan berikan perlindungan terbaik untuk anak-anak di era digital
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center space-x-3 group">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" alt="Google Play" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download di</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>

              <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center space-x-3 group">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download di</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-purple-100">
                * Aplikasi akan segera tersedia di App Store dan Google Play Store
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-100">Gratis untuk 30 hari pertama</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-100">Tanpa iklan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-purple-100">Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Tim Pengembang</h2>
            <p className="text-xl text-gray-600">
              Mahasiswa Universitas Indonesia yang berdedikasi untuk perlindungan anak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                MH
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Muhammad Hamiz Ghani Ayusha</h3>
              <p className="text-purple-600 font-medium">Lead Developer</p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                AM
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Ammar Muhammad Rafif</h3>
              <p className="text-purple-600 font-medium">AI Engineer</p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                FA
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fidel Akilah</h3>
              <p className="text-purple-600 font-medium">Product Designer</p>
              
            </div>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-600">
              Proyek untuk <strong>GEMASTIK 2025</strong> - Divisi Pengembangan Perangkat Lunak
            </p>
            <p className="text-purple-600 font-semibold">Universitas Indonesia, Depok</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-2xl font-bold">Fokal</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Solusi parental control berbasis AI Vision untuk melindungi anak-anak dari 
                konten pornografi dan pornoteks secara real-time.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#fitur" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#inovasi" className="hover:text-white transition-colors">Inovasi</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Harga</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Fokal. Dibuat dengan ❤️ oleh Tim Universitas Indonesia untuk GEMASTIK 2025
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Melindungi masa depan anak Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FokalLandingPage;