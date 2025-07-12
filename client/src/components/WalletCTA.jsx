export default function WalletCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 text-center">
      <h2 className="text-4xl font-bold text-black mb-4">
        Securely Store & Track Your Assets
      </h2>
      <p className="text-black mb-8">
        Manage all your crypto and traditional assets in one wallet.
      </p>
      <a
        href="/signup"
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Create Your Wallet
      </a>
    </section>
  );
}
