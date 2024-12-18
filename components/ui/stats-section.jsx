export function StatsSection() {
    const stats = [
        {
            number: "5000+",
            label: "Total Listings in the System",
            variant: "green",
        },
        {
            number: "1000+",
            label: "Active Listings",
            variant: "dark",
        },
        {
            number: "30+",
            label: "Articles in the Blog",
            variant: "green",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Moto Hub en quelques chiffres
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 ${
                                stat.variant === "dark"
                                    ? "bg-black text-white"
                                    : "bg-[#9FE870] text-black"
                            }`}
                        >
                            <div className="text-5xl font-bold mb-2">{stat.number}</div>
                            <div className="text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

