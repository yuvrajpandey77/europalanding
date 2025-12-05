export function StatsSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 - 234M */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EBEBEB] px-6 py-10 text-center">
            <h3 className="text-4xl font-bold text-[#1a1a1a] md:text-5xl">
              234<span className="text-3xl font-medium md:text-4xl">M</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              Supporting multiple
              <br />
              currencies for users.
            </p>
          </div>

          {/* Card 2 - 768K (Dark card) */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#1a1a1a] px-6 py-10 text-center">
            <h3 className="text-4xl font-bold text-white md:text-5xl">
              768<span className="text-[#9FDE14]">K</span>
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Gaining new users
              <br />
              every single month.
            </p>
          </div>

          {/* Card 3 - 5.0 Star */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EBEBEB] px-6 py-10 text-center">
            <h3 className="text-4xl font-bold text-[#1a1a1a] md:text-5xl">
              5.0<span className="text-3xl md:text-4xl">★</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              High star ratings from
              <br />
              satisfied users.
            </p>
          </div>

          {/* Card 4 - $8.8B */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EBEBEB] px-6 py-10 text-center">
            <h3 className="text-4xl font-bold text-[#1a1a1a] md:text-5xl">
              $8.8<span className="text-3xl font-medium md:text-4xl">B</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500">
              Generating increased
              <br />
              revenue consistently
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
