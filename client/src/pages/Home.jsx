import Hero from "../components/Hero";
import CryptoPrices from "../components/CryptoPrices";
import WalletCTA from "../components/WalletCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <CryptoPrices />
      <WalletCTA />
      <Footer />
    </div>
  );
}
