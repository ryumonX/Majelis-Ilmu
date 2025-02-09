'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import SplashPage from './component/splash';
import { motion, AnimatePresence } from 'framer-motion';
import InvitationSection from './component/text';
import { FiArrowUp, FiClock, FiMapPin, FiBook, FiHeart } from 'react-icons/fi';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  const handleSplashComplete = () => {
    setIsSplashVisible(false);
    document.body.style.overflow = 'auto'; // Mengembalikan scroll setelah splash selesai
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
      {/* Splash Page sebagai overlay */}
      <AnimatePresence>
        {isSplashVisible && <SplashPage onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Konten utama */}
      <div className={styles.container}>
        <div className={styles.decorativeBorder}></div>

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>ꦩꦗꦼꦭꦶꦱ꧀ꦲꦶꦭ꧀ꦩꦸ</h1>
            <p className={styles.headerSubtitle} aria-label="Meneladani Akhlak Mulia Rasulullah">
              "Meneladani Akhlak Mulia Rasulullah"
            </p>
            <hr className={styles.headerDivider} role="separator" />

            <InvitationSection />
          </div>
        </motion.header>

        <main>
          <section className={`${styles.section} ${styles.fadeIn}`}>
            <div className={styles.sectionIcon}>
              <FiHeart />
            </div>
            <h2 className={styles.sectionTitle}>Seminar Akhlak Nabawi</h2>
            <p className={styles.themeText}>
              "RASULULLAH SURI TELADAN SEMPURNA:
              <br />
              Menerapkan Sunnah dalam Kehidupan Modern"
            </p>
            <div className={styles.verseCard}>
              <div className={styles.arabicVerse}>
                ﴿لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ﴾
              </div>
              <q className={styles.verseTranslation}>
                "Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu..."
              </q>
              <div className={styles.verseReference}>
                <span className={styles.surahName}>Al-Ahzab</span>
                <span className={styles.verseNumber}>:21</span>
              </div>
            </div>

            <div className={styles.eventDetails}>
              <div className={styles.detailCard}>
                <FiClock className={styles.detailIcon} />
                <div>
                  <h3>Waktu Pelaksanaan</h3>
                  <p>Ahad, 12 Rabiul Awal 1446 H</p>
                  <p>08.30 WIB - Dzuhur</p>
                </div>
              </div>

              <div className={styles.detailCard}>
                <FiMapPin className={styles.detailIcon} />
                <div>
                  <h3>Tempat Acara</h3>
                  <p>SMK INFOKOM KOTA BOGOR</p>
                  <p>Jl. Letjen Ibrahim Adjie Kota Bogor</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>Materi Kajian</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📚</div>
                <h3>Sejarah Hidup Rasulullah</h3>
                <p>Perjalanan hidup dari kelahiran hingga wafatnya Nabi</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>💞</div>
                <h3>Akhlak Mulia</h3>
                <p>Keteladanan dalam bermasyarakat dan berkeluarga</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🌐</div>
                <h3>Sunnah Modern</h3>
                <p>Menerapkan nilai-nilai kenabian di era digital</p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.fadeIn}`}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Mari Bergabung dalam Kegiatan Dakwah!</h2>
              <p className={styles.ctaSubtitle}>
                Jadilah bagian dari perubahan, hanya untuk 300 peserta pertama
              </p>
              <div className={styles.ctaTimer}>
                <span>⏳ Pendaftaran ditutup dalam: 2 Hari 18 Jam</span>
              </div>
              <button
                className={styles.ctaButton}
                onClick={() => (window.location.href = 'https://wa.me/6283152898953')}
              >
                Hubungi Kami di WhatsApp dan Daftar Sekarang
              </button>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.contactText}>
              &copy; {new Date().getFullYear()} Dewangga Mustika XII RPL 1. All Rights Reserved.
            </p>
            <div className={styles.footerDivider}></div>
            <p className={styles.footerQuote}>
              "Sesungguhnya aku diutus untuk menyempurnakan akhlak yang mulia"
              <br />
              (HR. Al-Baihaqi)
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
    </div>
  );
};

export default App;