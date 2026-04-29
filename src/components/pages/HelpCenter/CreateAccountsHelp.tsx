export default function CreateAccountHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-secondary pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <a href="/help" className="text-primary text-sm font-semibold hover:underline mb-6 block">← Back to Help Center</a>
        <h1 className="text-3xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
          Creating an Account
        </h1>
        <p className="text-text-color/60 text-sm mb-8">Last updated · 2 min read</p>
        <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-text-color/80 leading-relaxed space-y-4">
          <p>You can create an account directly in the mobile app using the <span className="text-text-color font-semibold">Sign Up</span> screen.</p>
          <p>Enter your details, verify your email, and your account will be ready.</p>
          <p>If you already have an account, simply log in to access your wallet.</p>
        </div>
      </div>
    </div>
  );
}