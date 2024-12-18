import Image from 'next/image'

export function Card({ name, image }) {
    return (
        <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
            </div>
        </div>
    )
}

