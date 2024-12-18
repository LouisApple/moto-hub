import Image from "next/image"
import Link from "next/link"

const articles = [
    {
        date: "18 décembre 2024",
        title: "Une révolution pour les motards urbains",
        description: "Cette innovation transforme la manière dont les motards protègent et rechargent leurs véhicules en ville. Sécurité, praticité et écologie au rendez-vous.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&h=600&fit=crop",
        link: "#"
    },
    {
        date: "09 décembre 2024",
        title: "L'abri moto qui fait parler de lui",
        description: "Compact et sécurisé, cet abri conçu pour les motos électriques séduit autant les professionnels que les particuliers.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&h=400&fit=crop",
        link: "#"
    },
    {
        date: "18 novembre 2024",
        title: "Un pas de géant vers la mobilité durable",
        description: "Avec son design innovant et ses fonctionnalités avancées, cette solution marque une étape clé dans la transition vers des infrastructures modernes.",
        image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=600&h=400&fit=crop",
        link: "#"
    },
    {
        date: "11 octobre 2024",
        title: "L'innovation au service des deux-roues",
        description: "Enfin un abri pensé pour répondre aux vrais besoins des motards, alliant sécurité et recharge électrique dans un format modulable.",
        image: "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=600&h=400&fit=crop",
        link: "#"
    },
    {
        date: "07 octobre 2024",
        title: "Quand praticité rime avec écologie",
        description: "Cette nouvelle infrastructure pour motos électriques prouve qu'il est possible de concilier respect de l'environnement et confort d'utilisation.",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=600&h=400&fit=crop",
        link: "#"
    }
]

export default function AboutUs() {
    const [featuredArticle, ...otherArticles] = articles

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2">Ils parlent de nous</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-12"></div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Featured Article */}
                <Link href={featuredArticle.link} className="block group">
                    <article className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform group-hover:scale-105"
                                priority
                            />
                        </div>
                        <div className="space-y-2">
                            <time className="text-green-600 font-medium">
                                {featuredArticle.date}
                            </time>
                            <h3 className="text-2xl font-bold">{featuredArticle.title}</h3>
                            <p className="text-gray-600 line-clamp-2">
                                {featuredArticle.description}
                            </p>
                        </div>
                    </article>
                </Link>

                {/* Other Articles */}
                <div className="space-y-8">
                    {otherArticles.map((article, index) => (
                        <Link key={index} href={article.link} className="block group">
                            <article className="grid grid-cols-3 gap-4">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(max-width: 768px) 33vw, 20vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <time className="text-green-600 font-medium">
                                        {article.date}
                                    </time>
                                    <h3 className="font-bold">{article.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {article.description}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

