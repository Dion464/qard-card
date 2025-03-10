import Header from '../components/Header';
import Hero from '../components/Hero';
import Swisssection from '../components/Swisssection';
import QardText from '../components/QardText';
import AppFeatures from '../components/AppFeatures';
import SmartBack from '../components/SmartBack';
import Crypto from '../components/Crypto';
import Search from '../components/search';
import QardChip from '../components/QardChip';
import TryQard from '../components/TryQard';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-qard-dark">
      <Header />
      <Hero />
      <Swisssection />
      <QardText />
      <AppFeatures />
      <SmartBack />
      <Crypto />
      <Search />
      <QardChip />
      <TryQard />
      <Footer />
    </div>
  );
}
