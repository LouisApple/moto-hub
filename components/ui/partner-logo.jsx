import Image from 'next/image'

export function PartnerLogo({ name, logo }) {
    return (
        <div className="relative aspect-square w-full max-w-[200px] mx-auto">
            <Image
                src={logo}
                alt={name}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
            />
        </div>
    )
}

