export default function Hero() {
  return (
    <section className="bg-black text-white text-center py-24">
      <h1 className="text-5xl font-bold mb-6">
        Buy, Sell, and Track Crypto <span className="text-blue-400">with Fundify</span>
      </h1>
      <p className="max-w-xl mx-auto text-gray-400 mb-8">
        Your secure, real-time investment tracker for cryptocurrencies and stocks.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/signup"
          className="bg-blue-500 px-6 py-3 rounded font-semibold hover:bg-blue-600"
        >
          Get Started
        </a>
        <a
          href="/explorer"
          className="border border-blue-500 px-6 py-3 rounded font-semibold hover:bg-blue-500 hover:text-black"
        >
          Explore
        </a>
      </div>
    </section>
  );
}
