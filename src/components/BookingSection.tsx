import React, { useState } from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { SunburstIcon } from './BotanicalMotif';
import { 
  Calendar, 
  Users, 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  Instagram, 
  Facebook,
  ShieldCheck,
  X
} from 'lucide-react';

export const BookingSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '10',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    id: string;
    fullName: string;
    dates: string;
    guests: string;
    totalEst: number;
    phone: string;
  } | null>(null);

  // Calculate nights and estimated pricing
  const calculatePricing = () => {
    if (!formData.checkIn || !formData.checkOut) {
      return { nights: 0, estimatedTotal: 0 };
    }
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    if (nights <= 0) return { nights: 0, estimatedTotal: 0 };

    // Approximation: blend weekday and weekend average rate
    const avgNightlyRate = (PROPERTY_INFO.pricing.weekday + PROPERTY_INFO.pricing.weekend) / 2;
    const estimatedTotal = nights * avgNightlyRate + PROPERTY_INFO.pricing.cleaningFee;
    return { nights, estimatedTotal };
  };

  const { nights, estimatedTotal } = calculatePricing();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const inquiryId = `SOL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedInquiry({
        id: inquiryId,
        fullName: formData.fullName,
        dates: `${formData.checkIn} to ${formData.checkOut} (${nights} night${nights > 1 ? 's' : ''})`,
        guests: `${formData.guests} guests`,
        totalEst: estimatedTotal > 0 ? estimatedTotal : PROPERTY_INFO.pricing.weekday,
        phone: formData.phone,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2E3B2B]/75">
              Direct Reservation & Inquiry
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2E3B2B] tracking-tight mb-4">
            Ready to Slow Down & Make Memories?
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Reserve your dates at Solara de Alfonso. Enjoy exclusive access to the entire private villa, pool, and highland gardens.
          </p>
        </div>

        {/* Main Grid: Form on Left / Direct Booking & Concierge on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#2E3B2B]/10">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-8">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#2E3B2B]">
                  Send a Booking Request
                </h3>
                <p className="text-xs text-[#222222]/60 mt-1 font-sans">
                  No immediate charge · We respond within 1–2 hours to confirm calendar availability.
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs text-[#2E3B2B]/70 block font-mono">Rates start from</span>
                <span className="font-serif text-xl font-bold text-[#D4A359]">₱14,500</span>
                <span className="text-xs text-neutral-400">/night</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maria@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] bg-white transition-colors"
                  >
                    <option value="2-4">2 to 4 Guests (Couple / Small Family)</option>
                    <option value="5-8">5 to 8 Guests</option>
                    <option value="10">10 to 12 Guests</option>
                    <option value="14">13 to 16 Guests (Full Villa Capacity)</option>
                    <option value="18">17 to 20 Guests (With Extra Mattresses)</option>
                  </select>
                </div>
              </div>

              {/* Check-in & Check-out Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Check-in Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                    Check-out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2E3B2B] mb-2">
                  Special Requests / Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your celebration, arrival time, or pet questions..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#2E3B2B] focus:ring-1 focus:ring-[#2E3B2B] text-sm text-[#222222] transition-colors resize-none"
                />
              </div>

              {/* Interactive Night & Estimate Summary Bar */}
              {nights > 0 && (
                <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#2E3B2B]/10 flex items-center justify-between text-xs text-[#2E3B2B]">
                  <div>
                    <span className="font-semibold">{nights} Night{nights > 1 ? 's' : ''} Selected</span>
                    <span className="text-neutral-500 block text-[11px]">Private exclusive use of all bedrooms & pool</span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-500 text-[11px] block">Estimated Total</span>
                    <span className="font-serif text-base font-bold text-[#2E3B2B]">
                      ₱{estimatedTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#2E3B2B] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest shadow-lg hover:bg-[#D4A359] hover:text-[#2E3B2B] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Checking Availability...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Booking Request</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct Channels & Host Concierge Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Airbnb Direct Link Card */}
            <div className="bg-[#2E3B2B] text-[#FDFBF7] rounded-3xl p-8 shadow-xl relative overflow-hidden border border-[#D4A359]/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-[#D4A359] font-mono">
                  Preferred Platform
                </span>
                <span className="font-serif italic text-sm text-[#FDFBF7]/80">Superhost Standard</span>
              </div>

              <h4 className="font-serif text-2xl font-normal text-white mb-3">
                Book Instantly on Airbnb
              </h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                Prefer booking with guest insurance and instant confirmation? Check our verified listing directly on Airbnb.
              </p>

              <a
                href={PROPERTY_INFO.contacts.airbnbUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#D4A359] text-[#2E3B2B] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer"
              >
                <span>View on Airbnb</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Host WhatsApp & Calls */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#2E3B2B]/10">
              <h4 className="font-serif text-xl font-medium text-[#2E3B2B] mb-2">
                Talk to Our Host Directly
              </h4>
              <p className="text-sm text-[#222222]/75 mb-6 font-light leading-relaxed">
                Have questions regarding team buildings, pre-nuptial photo shoots, or custom catering? Message us directly.
              </p>

              <div className="space-y-4 text-sm">
                <a
                  href={`https://wa.me/${PROPERTY_INFO.contacts.whatsapp}?text=Hi!%20I'm%20inquiring%20about%20staying%20at%20Solara%20de%20Alfonso.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors font-medium"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#128C7E]">Chat on WhatsApp</div>
                    <div className="text-xs text-[#222222]/70">{PROPERTY_INFO.contacts.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${PROPERTY_INFO.contacts.email}?subject=Reservation%20Inquiry%20-%20Solara%20de%20Alfonso`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#2E3B2B]/5 text-[#2E3B2B] hover:bg-[#2E3B2B]/10 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5 shrink-0 text-[#D4A359]" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">Email Host</div>
                    <div className="text-xs text-[#222222]/70">{PROPERTY_INFO.contacts.email}</div>
                  </div>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-[#222222]/70">
                <span>Follow our journal:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-neutral-100 text-[#2E3B2B] transition-colors"
                    aria-label="Solara Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full hover:bg-neutral-100 text-[#2E3B2B] transition-colors"
                    aria-label="Solara Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Booking Submission Confirmation Receipt Modal */}
      {submittedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#FDFBF7] text-[#222222] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#2E3B2B]/15 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSubmittedInquiry(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#2E3B2B] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#2E3B2B] text-[#D4A359] flex items-center justify-center mx-auto mb-5 shadow-md">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl text-center text-[#2E3B2B] mb-1">
              Booking Request Sent!
            </h3>
            <p className="text-center text-xs text-[#222222]/70 mb-6">
              Reference #{submittedInquiry.id}
            </p>

            <div className="bg-white rounded-2xl p-5 border border-neutral-100 text-xs space-y-3 mb-6">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Guest Name</span>
                <span className="font-semibold text-[#2E3B2B]">{submittedInquiry.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Requested Dates</span>
                <span className="font-semibold text-[#2E3B2B]">{submittedInquiry.dates}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500">Party Size</span>
                <span className="font-semibold text-[#2E3B2B]">{submittedInquiry.guests}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Estimated Total</span>
                <span className="font-bold text-[#D4A359] text-sm">
                  ₱{submittedInquiry.totalEst.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 text-center leading-relaxed mb-6 font-light">
              Our reservation team in Alfonso will review your dates and contact you via WhatsApp / email within 1–2 hours to provide final confirmation and bank transfer or Airbnb deposit instructions.
            </p>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${PROPERTY_INFO.contacts.whatsapp}?text=Hi!%20I%20just%20submitted%20booking%20request%20%23${submittedInquiry.id}%20for%20Solara%20de%20Alfonso.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow Up on WhatsApp</span>
              </a>
              <button
                onClick={() => setSubmittedInquiry(null)}
                className="w-full py-3 rounded-full bg-[#2E3B2B]/5 text-[#2E3B2B] text-xs font-semibold uppercase tracking-wider hover:bg-[#2E3B2B]/10 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
