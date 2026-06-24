interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, i) => (
        <details key={i} className="group">
          <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none text-sm font-medium text-charcoal hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
            <span>Q. {faq.question}</span>
            <span className="mt-0.5 shrink-0 text-charcoal-light group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="pb-5 text-sm text-charcoal-light leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
