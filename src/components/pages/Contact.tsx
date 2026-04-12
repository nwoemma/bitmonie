import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const contactInfo = [
  { icon: faEnvelope, title: 'Email', details: '', link: '#' },
  { icon: faPhone, title: 'Phone', details: '', link: '#' },
  { icon: faMapMarker, title: 'Office', details: 'Nigeria', link: '#' },
  { icon: faClock, title: 'Support Hours', details: '24/7 Customer Support', link: '#' },
];

export default function Contact() {
  const headerRef = useRef(null);
  const infoRef = useRef<(HTMLDivElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    infoRef.current.forEach(info => {
      if (info) observer.observe(info);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/20 to-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 opacity-0">
          <h1 className="text-3xl md:text-4xl font-black text-text-color mb-4" style={{ letterSpacing: '-0.5px' }}>
            Contact Us
          </h1>
          <p className="text-text-color/70 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={el => { infoRef.current[index] = el; }}
                className="opacity-0 bg-secondary/50 border border-primary/20 rounded-2xl p-6 hover:border-tertiary hover:bg-primary/10 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-tertiary transition-all flex-shrink-0">
                    <FontAwesomeIcon icon={info.icon} className="w-5 h-5 text-primary group-hover:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-color mb-1">{info.title}</h3>
                    <a href={info.link} className="text-text-color/70 hover:text-tertiary transition-colors">
                      {info.details}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-text-color mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text-color/80 mb-2 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-tertiary text-text-color"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-text-color/80 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-tertiary text-text-color"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-text-color/80 mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-tertiary text-text-color"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-text-color/80 mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-xl focus:outline-none focus:border-tertiary text-text-color resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-text-color font-semibold rounded-xl hover:bg-tertiary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                Send Message <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}