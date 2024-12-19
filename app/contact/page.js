'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'informations',
        message: '',
        newsletter: false,
        terms: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-white mt-10 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-800">Nous contacter</h1>
                    <p className="mt-2 text-lg text-gray-600">Une question ? Écrivez-nous un message !</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Information Panel */}
                    <div className="bg-green-800 rounded-lg p-8 text-white">
                        <h2 className="text-2xl font-semibold mb-8">Information de contact</h2>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 mr-3" />
                                <span>07 07 08 09 11</span>
                            </div>

                            <div className="flex items-center">
                                <Mail className="h-6 w-6 mr-3" />
                                <span>demo@gmail.com</span>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 mr-3 mt-1" />
                                <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="flex space-x-4">
                                <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600">
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600">
                                    <Youtube className="h-5 w-5" />
                                </a>
                                <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        Prénom <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Nom <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Numéro de téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Sélectionner un sujet <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {['Informations', 'Demande de devis', 'SAV', 'Autres'].map((option) => (
                                        <div key={option} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="subject"
                                                value={option.toLowerCase()}
                                                checked={formData.subject === option.toLowerCase()}
                                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                className="h-4 w-4 text-green-600 focus:ring-green-500"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={2}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm resize-none min-h-[50px]"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                        checked={formData.newsletter}
                                        onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                                    />
                                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                                        Je souhaite recevoir les dernières actualités de Mobilub
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        required
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                        checked={formData.terms}
                                        onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                                    />
                                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                        J&apos;accepte les CGU
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

