'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Link from "next/link";

export default function Hero() {
    const [selectedType, setSelectedType] = useState('particulier')

    return (
        <div className="relative min-h-screen pt-20">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://www.mutuelledesmotards.fr/sites/default/files/inline/files/PDF/LOW_shutterstock_463634849.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>


            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Découvrez votre <span className="text-green-600">abri sécurisé</span>
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Protégez et rechargez votre moto en quelques étapes
                    </p>

                    {/* Toggle buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={() => setSelectedType('particulier')}
                            className={`px-6 py-2 rounded-full ${
                                selectedType === 'particulier'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-700'
                            }`}
                        >
                            Particulier
                        </button>
                        <button
                            onClick={() => setSelectedType('entreprise')}
                            className={`px-6 py-2 rounded-full ${
                                selectedType === 'entreprise'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-700'
                            }`}
                        >
                            Entreprise
                        </button>
                        <button
                            onClick={() => setSelectedType('ville')}
                            className={`px-6 py-2 rounded-full ${
                                selectedType === 'ville'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-700'
                            }`}
                        >
                            Ville
                        </button>
                    </div>
                    <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-12 py-6 rounded-full bg-white text-green-600 mt-3 text-lg font-bold text-center"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

