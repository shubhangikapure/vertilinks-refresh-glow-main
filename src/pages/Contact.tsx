import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ company: "", name: "", email: "", mobile: "", city: "", country: "", description: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-brand-dark py-20 md:py-28">
          <div className="section-container">
            <p className="text-sm text-primary-foreground/60 mb-2">Home / Contact</p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground mb-6">Let's Build Your Next Project</h1>
            <p className="max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Share your requirements and our consultants will get back within one business day with next steps.
            </p>
          </div>
        </section>

        <section className="section-container section-padding">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Our sales, technical service and customer service teams are prepared to serve customers around the world.</h2>
              <p className="text-muted-foreground mb-8">Contact our Vertilinks team for more information about our products or to obtain a price quote.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company*</label>
                    <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name*</label>
                    <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email*</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mobile*</label>
                    <input name="mobile" value={form.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                    <input name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                    <input name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Description*</label>
                  <textarea name="description" value={form.description} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none resize-none" required />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-brand-red-dark transition-colors">Submit</button>
                  <button type="reset" onClick={() => setForm({ company: "", name: "", email: "", mobile: "", city: "", country: "", description: "" })} className="px-8 py-3 border border-border rounded-lg text-foreground hover:bg-accent transition-colors">Reset</button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-display font-bold text-foreground">Prefer another channel? Reach our team directly.</h3>
              <div className="space-y-4">
                <a href="tel:+971505810499" className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-accent transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Call us</div>
                    <div className="text-sm font-medium text-foreground">+971 50 581 0499</div>
                  </div>
                </a>
                <a href="mailto:services@vertilinks.com" className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-accent transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email us</div>
                    <div className="text-sm font-medium text-foreground">services@vertilinks.com</div>
                  </div>
                </a>
                <a href="https://wa.me/971505810499" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-accent transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Chat on WhatsApp</div>
                    <div className="text-sm font-medium text-foreground">+971505810499</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
