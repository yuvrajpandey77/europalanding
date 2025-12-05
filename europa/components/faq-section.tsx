export function FaqSection() {
  const faqs = [
    { question: "What is the purpose of this fintech service?" },
    { question: "What types of financial services do you offer?" },
    { question: "Is there a mobile app available for this service?" },
    { question: "How secure is my personal and financial information?" },
    { question: "Are there any fees associated with using this service?" },
    { question: "What payment methods do you support?" },
    { question: "Can I transfer money internationally using this platform?" },
    { question: "How long does it take for a transaction to be processed?" },
    { question: "What should I do if I notice unauthorized transactions?" },
    { question: "How do I update my personal or account information?" },
  ]

  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-[#9FDE14] rounded-full"></span>
            FAQ's
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 font-serif italic">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-12">
          Provide quick answers to typical concerns, improving user experience by offering clear guidance,
          troubleshooting
        </p>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EBEBEB] rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#E0E0E0] transition-colors"
            >
              <span className="text-gray-800 font-medium text-sm">{faq.question}</span>
              <span className="text-gray-400 text-xl">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
