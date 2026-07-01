'use client';

// Non-functional contact form UI (static replica). Submit is prevented.
export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="card space-y-5 p-6 sm:p-8"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold text-ink">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          className="w-full rounded-[8px] border border-[#ddd5e6] bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold text-ink">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          className="w-full rounded-[8px] border border-[#ddd5e6] bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full rounded-[8px] border border-[#ddd5e6] bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-brand"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send
      </button>
    </form>
  );
}
