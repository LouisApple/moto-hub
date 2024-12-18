'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo/logo.svg"
                                width={100}
                                height={40}
                                className="h-10 w-auto"
                                alt = 'logo'/>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-gray-900">
                                Accueil
                            </Link>
                            <Link href="/a-propos" className="text-gray-700 hover:text-gray-900">
                                A propos
                            </Link>
                            <Link href="/realisation" className="text-gray-700 hover:text-gray-900">
                                Réalisation
                            </Link>
                            <Link href="/partenaires" className="text-gray-700 hover:text-gray-900">
                                Nos partenaires
                            </Link>
                            <Link href="/temoignages" className="text-gray-700 hover:text-gray-900">
                                Ils parlent de nous
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                            Accueil
                        </Link>
                        <Link href="/a-propos" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                            A propos
                        </Link>
                        <Link href="/realisation" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                            Réalisation
                        </Link>
                        <Link href="/partenaires" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                            Nos partenaires
                        </Link>
                        <Link href="/temoignages" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                            Ils parlent de nous
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

