export function FaqSection() {
  const faqs = [
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
    { question: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?" },
    { question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?" },
    { question: "Duis aute irure dolor in reprehenderit in voluptate velit esse?" },
    { question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa?" },
    { question: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem?" },
    { question: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis?" },
    { question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut?" },
    { question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit?" },
    { question: "At vero eos et accusamus et iusto odio dignissimos ducimus?" },
  ]

  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-[#9FDE14] rounded-full"></span>
            LOREM IPSUM
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 font-serif italic">
          Lorem Ipsum Dolor Sit Amet
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
