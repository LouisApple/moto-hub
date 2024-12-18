import { MapPin } from 'lucide-react'

const steps = [
    {
        number: 1,
        title: "Conception et design du plan d'aménagement et choix des matériaux"
    },
    {
        number: 2,
        title: "Étape de fabrication et d'installation de vos équipements réalisés par nos soins de manière artisanale"
    },
    {
        number: 3,
        title: "Un abri aménagé pour vos motos"
    },
    {
        number: 4,
        title: "L'aménagement est fin prêt et nous vous livrons le projet !"
    }
]

export function ProjectTimeline() {
    return (
        <section className="bg-green-600 py-16 px-4 mx-1 md:mx-4 rounded-lg">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Déroulement du projet
                </h2>
                <div className="relative">
                    {/* Dotted line */}
                    <div className="absolute top-8 left-4 right-4 border-t-2 border-dashed border-green-400 hidden md:block" />

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative z-10">
                                        <MapPin className="w-8 h-8 text-green-600" />
                                    </div>
                                    <p className="text-white text-lg font-medium mb-2">
                                        {step.number}
                                    </p>
                                    <p className="text-white text-center">
                                        {step.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-white text-center mt-12">
                    Chaque étape est importante pour la bonne réussite du projet.
                </p>
            </div>
        </section>
    )
}
