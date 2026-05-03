export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Financial Accountability
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Break a habit streak?<br />
          <span className="text-[#58a6ff]">Your wallet pays the price.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          StreakStake tracks your daily habits and automatically charges your card or donates to a cause you hate when you slip up. Real consequences. Real results.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Staying Accountable — $5/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Set Your Habits</h3>
            <p className="text-sm text-[#8b949e]">Define daily habits and choose a penalty — a charge to your card or a donation to a cause you dislike.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-white mb-1">Check In Daily</h3>
            <p className="text-sm text-[#8b949e]">Log completions each day. Automated cron jobs monitor your streaks and trigger penalties automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-semibold text-white mb-1">Face Consequences</h3>
            <p className="text-sm text-[#8b949e]">Miss a day and Stripe fires the charge instantly. Pain is the best motivator — use it.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$5</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited habits & streaks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Stripe Connect penalty charges</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Charity donation penalties</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily cron check-ins & alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Streak history & analytics</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do the penalty charges work?</h3>
            <p className="text-sm text-[#8b949e]">You connect your card via Stripe during onboarding. When you miss a habit check-in, our system automatically charges the penalty amount you set — no manual action needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if I want to donate to charity instead?</h3>
            <p className="text-sm text-[#8b949e]">You can choose a charity penalty instead of a personal charge. We partner with vetted organizations — you pick one you'd rather not support to maximize motivation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I pause or cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel your $5/mo subscription anytime from your dashboard. Penalty rules are paused immediately upon cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} StreakStake. All rights reserved.
      </footer>
    </main>
  )
}
