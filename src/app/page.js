'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SplashPage from './component/splash';
import { FiArrowUp, FiClock, FiMapPin, FiBook, FiGift } from 'react-icons/fi';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isSplashComplete, setIsSplashComplete] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleSplashComplete = () => {
    setIsSplashComplete(true);
    setIsSplashVisible(false);
  };

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div>
      {isSplashVisible && <SplashPage onComplete={handleSplashComplete} />}

      {isSplashComplete && (
        <div className={styles.container}>
          <div className={styles.decorativeBorder}></div>
          
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.headerTitle}>ꦩꦗꦼꦭꦶꦱ꧀ꦲꦶꦭ꧀ꦩꦸ</h1>
              <p className={styles.headerSubtitle}>"Meraih Kemuliaan Melalui Ilmu"</p>
              <div className={styles.headerDivider}></div>
              <p className={styles.invitationText}>
                Dengan mengharap ridho Allah Subhanahu wa Ta'ala, kami mengundang:
              </p>
            </div>
          </header>

          <main>
            <section className={`${styles.section} ${styles.fadeIn}`}>
              <div className={styles.sectionIcon}><FiBook /></div>
              <h2 className={styles.sectionTitle}>Kajian Islam Ilmiah</h2>
              <p className={styles.themeText}>
                "MEMBANGUN KELUARGA SAKINAH BERBASIS SUNNAH NABAWIYAH"
              </p>
              
              <div className={styles.eventDetails}>
                <div className={styles.detailCard}>
                  <FiClock className={styles.detailIcon} />
                  <div>
                    <h3>Waktu Pelaksanaan</h3>
                    <p>Sabtu, 15 Rajab 1446 H</p>
                    <p>08.00 WIB - Selesai</p>
                  </div>
                </div>
                
                <div className={styles.detailCard}>
                  <FiMapPin className={styles.detailIcon} />
                  <div>
                    <h3>Tempat Acara</h3>
                    <p>Auditorium Masjid Al-Ikhlas</p>
                    <p>Jl. Kenangan Indah No. 45, Kota Barakah</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.fadeIn}`}>
              <h2 className={styles.sectionTitle}>Fasilitas Peserta</h2>
              <div className={styles.benefitGrid}>
                <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🎁</div>

                  <h3>Paket Materi Eksklusif</h3>
                  <p>Buku panduan lengkap + Sertifikat peserta</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🎁</div>
                  <h3>Doorprize Menarik</h3>
                  <p>Umroh, Paket buku, dan merchandise eksklusif</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>☕</div>
                  <h3>Coffee Break</h3>
                  <p>Hidangan spesial untuk semua peserta</p>
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.fadeIn}`}>
              <div className={styles.ctaBox}>
                <h2 className={styles.ctaTitle}>Segera Daftarkan Diri Anda!</h2>
                <p className={styles.ctaSubtitle}>Kuota terbatas untuk 200 peserta pertama</p>
                <div className={styles.ctaTimer}>
                  <span>⏳ Pendaftaran ditutup dalam: 3 Hari 12 Jam</span>
                </div>
                <button className={styles.ctaButton}>
                  Daftar Sekarang Gratis
                </button>
              </div>
            </section>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <p className={styles.contactText}>
                Konfirmasi Kehadiran: (021) 1234-5678 | WA: 0812-3456-7890
              </p>
              <div className={styles.footerDivider}></div>
              <p className={styles.footerQuote}>
                "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya"
                <br />(HR. Bukhari)
              </p>
            </div>
          </footer>

          <button 
            className={`${styles.backToTop} ${showScroll ? styles.show : ''}`} 
            onClick={scrollTop}
          >
            <FiArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;