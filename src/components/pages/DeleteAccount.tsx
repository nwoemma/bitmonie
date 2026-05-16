import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTrashAlt, faShieldAlt, faWallet, faHistory, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function DeleteAccount() {
  const [showModal, setShowModal]   = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');
  const [submitted, setSubmitted]   = useState(false);
  const [refData, setRefData]       = useState(null);
  const [shaking, setShaking]       = useState(false);

  // Form state — required: full_name, email, phone_number | optional: reason
  const [form, setForm] = useState({
    full_name:    '',
    email:        '',
    phone_number: '',
    reason:       '',
    website:      '', // honeypot — hidden, must stay empty
  });

  const CONFIRM_WORD = 'DELETE';

  const handleOpenModal = () => { setError(''); setShowModal(true); };

  const handleCloseModal = () => {
    if (loading) return;
    setShowModal(false);
    setInputValue('');
    setError('');
  };

  const handleFormChange = (e:any) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleDelete = async () => {
    if (inputValue !== CONFIRM_WORD) {
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    if (!form.full_name.trim() || !form.email.trim() || !form.phone_number.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const payload = {
        full_name:    form.full_name.trim(),
        email:        form.email.trim(),
        phone_number: form.phone_number.trim(),
        ...(form.reason.trim() && { reason: form.reason.trim() }),
        website:      form.website, // honeypot — always sent (empty)
      };

      const API_URL = import.meta.env.DEV
        ? '/api-proxy/api/account-deletion-request'
        : 'https://api.bitmonie.com/api/account-deletion-request';

      const res = await fetch(API_URL, {
        method:  'POST',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 201 && data.type === 'success') {
        setRefData(data.data); // { reference_id, status, submitted_at }
        setShowModal(false);
        setSubmitted(true);
      } else {
        const msg =
          data?.message ||
          data?.errors?.[Object.keys(data?.errors || {})[0]]?.[0] ||
          'Something went wrong. Please try again.';
        setError(msg);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── SUCCESS SCREEN ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-[#0A1F44] mb-2">Request Submitted</h2>
          <p className="text-[#4A5568] mb-6 leading-relaxed">
            Your account deletion request has been received. Our team will process it shortly.
          </p>

          {refData && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#4A5568] font-medium">Reference ID</span>
                <span className="text-[#0A1F44] font-mono font-semibold">{refData.reference_id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#4A5568] font-medium">Status</span>
                <span className="capitalize text-tertiary font-semibold">{refData.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#4A5568] font-medium">Submitted</span>
                <span className="text-[#0A1F44]">{new Date(refData.submitted_at).toLocaleString()}</span>
              </div>
            </div>
          )}

          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary/20 hover:bg-primary/30 text-tertiary border border-primary/30 rounded-xl font-semibold transition-all"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  // ── MAIN PAGE ───────────────────────────────────────────────────────────────
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
        <div className="max-w-2xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 rounded-full mb-6 border border-red-500/20">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-500 font-semibold">Danger Zone</span>
          </div>

          <div className="relative inline-flex mb-8">
            <div className="w-24 h-24 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <FontAwesomeIcon icon={faTrashAlt} className="text-red-500 text-4xl" />
            </div>
            <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-white text-xs" />
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-[#0A1F44] mb-4" style={{ letterSpacing: '-0.5px' }}>
            Delete Your Account
          </h1>
          <p className="text-[#4A5568] leading-relaxed mb-10 max-w-lg mx-auto">
            Before you go, please review what will happen when you delete your Bitmonie account.
          </p>

          <div className="grid gap-3 mb-10 text-left">
            {[
              { icon: faWallet,    label: 'All wallet addresses will be deactivated',       color: 'text-tertiary', bg: 'bg-primary/10 border-primary/20', iconBg: 'bg-primary/20 group-hover:bg-primary' },
              { icon: faHistory,   label: 'Transaction history will be permanently erased', color: 'text-tertiary', bg: 'bg-primary/10 border-primary/20', iconBg: 'bg-primary/20 group-hover:bg-primary' },
              { icon: faShieldAlt, label: 'Account access will be immediately revoked',     color: 'text-red-500',  bg: 'bg-red-500/10 border-red-500/20', iconBg: 'bg-red-500/20' },
            ].map((item, i) => (
              <div key={i} className={`group flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-sm ${item.bg}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${item.iconBg}`}>
                  <FontAwesomeIcon icon={item.icon} className={`${item.color} text-sm`} />
                </div>
                <span className="text-[#0A1F44] text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/" className="px-8 py-3 rounded-xl font-semibold text-[#0A1F44] bg-secondary/80 hover:bg-primary/20 border border-primary/20 hover:border-primary transition-all">
              Cancel, Keep My Account
            </a>
            <button
              onClick={handleOpenModal}
              className="px-8 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 border border-red-500 transition-all shadow-lg shadow-red-500/20"
            >
              Continue to Delete
            </button>
          </div>
        </div>
      </section>

      {/* ── MODAL ──────────────────────────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
          <div className="absolute inset-0 bg-[#0A1F44]/60 backdrop-blur-sm" onClick={handleCloseModal} />

          <div
            className="relative z-10 w-full max-w-md bg-secondary border border-primary/20 rounded-2xl shadow-2xl p-8"
            style={shaking ? { animation: 'shake 0.5s ease' } : {}}
          >
            {/* Pulsing icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                <div className="relative w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-2xl" />
                </div>
              </div>
            </div>

            <h2 className="text-xl font-black text-[#0A1F44] text-center mb-1" style={{ letterSpacing: '-0.3px' }}>
              Are you sure?
            </h2>
            <p className="text-[#4A5568] text-sm text-center mb-6 leading-relaxed">
              This action is <span className="text-red-500 font-semibold">permanent and irreversible</span>.
              Fill in your details below to proceed.
            </p>

            {/* Form fields */}
            <div className="space-y-3 mb-4">

              <div>
                <label className="block text-[#4A5568] text-xs font-semibold uppercase tracking-widest mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  disabled={loading}
                  className="w-full bg-primary/5 border border-primary/20 focus:border-primary/60 text-[#0A1F44] placeholder-[#4A5568]/40 rounded-xl px-4 py-2.5 text-sm outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[#4A5568] text-xs font-semibold uppercase tracking-widest mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="john@example.com"
                  disabled={loading}
                  className="w-full bg-primary/5 border border-primary/20 focus:border-primary/60 text-[#0A1F44] placeholder-[#4A5568]/40 rounded-xl px-4 py-2.5 text-sm outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[#4A5568] text-xs font-semibold uppercase tracking-widest mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleFormChange}
                  placeholder="+2348012345678"
                  disabled={loading}
                  className="w-full bg-primary/5 border border-primary/20 focus:border-primary/60 text-[#0A1F44] placeholder-[#4A5568]/40 rounded-xl px-4 py-2.5 text-sm outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-[#4A5568] text-xs font-semibold uppercase tracking-widest mb-1">
                  Reason <span className="text-[#4A5568]/50 normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleFormChange}
                  placeholder="Tell us why you're leaving..."
                  rows={2}
                  disabled={loading}
                  className="w-full bg-primary/5 border border-primary/20 focus:border-primary/60 text-[#0A1F44] placeholder-[#4A5568]/40 rounded-xl px-4 py-2.5 text-sm outline-none transition-all resize-none disabled:opacity-50"
                />
              </div>

              {/* Honeypot — invisible to real users */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleFormChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />
            </div>

            {/* Confirm word */}
            <div className="mb-4">
              <label className="block text-[#4A5568] text-xs font-semibold uppercase tracking-widest mb-1">
                Type <span className="text-red-500">{CONFIRM_WORD}</span> to confirm
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                placeholder="DELETE"
                disabled={loading}
                className="w-full bg-primary/5 border border-primary/20 focus:border-red-400 text-[#0A1F44] placeholder-[#4A5568]/40 rounded-xl px-4 py-2.5 text-sm outline-none transition-all font-mono tracking-widest disabled:opacity-50"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCloseModal}
                disabled={loading}
                className="flex-1 py-3 rounded-xl font-semibold text-[#0A1F44] bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary transition-all text-sm disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={inputValue !== CONFIRM_WORD || loading}
                className={`flex-1 py-3 rounded-xl font-semibold text-white border transition-all text-sm flex items-center justify-center gap-2 ${
                  inputValue === CONFIRM_WORD && !loading
                    ? 'bg-red-500 border-red-500 hover:bg-red-600 cursor-pointer shadow-lg shadow-red-500/20'
                    : 'bg-red-500/20 border-red-500/20 cursor-not-allowed text-red-300'
                }`}
              >
                {loading
                  ? <><FontAwesomeIcon icon={faSpinner} className="animate-spin text-xs" /> Submitting...</>
                  : 'Delete Forever'
                }
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-5px); }
          80%       { transform: translateX(5px); }
        }
      `}</style>
    </>
  );
}