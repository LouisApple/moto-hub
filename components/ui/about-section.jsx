export function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-8 py-16 px-4 max-w-7xl mx-auto">
            <div className="w-full md:w-1/2">
                <img
                    src="https://i.pinimg.com/originals/41/97/76/4197767bc83f7a37efc0679e0ba22600.jpg"
                    className="rounded-lg w-full h-[400px] object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold">À propos</h2>
                <p className="text-gray-600 text-lg">
                    Un abri à moto novateur, sécurisé et équipé d'une solution intégrée pour la recharge électrique des
                    motos. Conçu sous forme de mini-box modulable et rapidement installable.
                </p>
                <p className="text-gray-600 text-lg">
                    Il répond aux besoins des professionnels (entreprises, collectivités, hôtels...) comme des
                    particuliers, alliant praticité, durabilité et modernité.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                    En savoir plus
                </button>
            </div>
        </section>
    )
}

