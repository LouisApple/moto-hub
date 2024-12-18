'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        Découvrez votre <span className="text-green-600">abri sécurisé</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
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

                    {/* Search bar */}
                    <div className="mt-8 max-w-xl mx-auto">
                        <div className="flex gap-2 bg-white p-2 rounded-lg shadow-lg">
                            <input
                                type="text"
                                placeholder="Prendre rendez-vous"
                                className="flex-1 px-4 py-2 border-0 focus:outline-none"
                            />
                            <div className="flex items-center px-4 border-l border-gray-300">
                                <select className="py-2 border-0 focus:outline-none text-gray-600">
                                    <option>Sélectionner la ville</option>
                                    <option>Paris</option>
                                    <option>Lyon</option>
                                    <option>Marseille</option>
                                </select>
                            </div>
                            <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
                                <Search className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

