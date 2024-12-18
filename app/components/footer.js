import SocialIcons from "@/app/components/SocialIcons";
import Image from 'next/image'


export default function Footer() {
    return (
        <footer className="bg-[#F4F4F4] text-black py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 ml-20">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWr5r596hI2WZPAqupnihYoVbSMXzSRJiuQ&s"
                            alt="Exemple d'image"
                            width={100} // Ajustez la largeur souhaitée
                            height={100} // Ajustez la hauteur souhaitée
                        />
                        <p className="mt-5 text-xs">Un abri moto novateur, sécurisé et équipé d'une solution intégrée pour la recharge électrique des motos</p>
                        <div className="mt-4">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-xs font-semibold mb-4 text-green-600">Navigation</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-xs">Accueil</a></li>
                            <li><a href="#" className="hover:underline text-xs">A propos</a></li>
                            <li><a href="#" className="hover:underline text-xs">Réalisations</a></li>
                            <li><a href="#" className="hover:underline text-xs">Nos partenaires</a></li>
                            <li><a href="#" className="hover:underline text-xs">Ils parlent de nous</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-xs font-semibold mb-4 text-green-600">Nos réalisations</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-xs">Kandy</a></li>
                            <li><a href="#" className="hover:underline text-xs">SecuredCage</a></li>
                            <li><a href="#" className="hover:underline text-xs">HandBar</a></li>
                            <li><a href="#" className="hover:underline text-xs">SecureIt</a></li>
                            <li><a href="#" className="hover:underline text-xs">ConnectGuardCycle</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xs font-semibold mb-4 text-green-600">Aide</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-xs">FAQ</a></li>
                            <li><a href="#" className="hover:underline text-xs">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div className="col-span-3 mr-3 ml-5">
                        <h3 className="text-xs font-semibold mb-4 text-green-600">S'inscrire à notre newsletter</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-xs">Rester informé des derniéres annonces et
                                des conseils.</a></li>
                            <input
                                type="email"
                                placeholder="     Adresse mail"
                                className="mt-3 w-[180px] h-[40px] rounded-[30px] border-[1px] border-gray-300 p-1 bg-[#CCCCCC] focus:ring-2 focus:ring-green-600 focus:outline-none text-xs"
                            />
                            <button
                                className="mt-3 w-[180px] h-[40px] rounded-[30px] p-[12px_28px_12px_28px] bg-[#007200] text-white font-semibold hover:bg-[#005d00] focus:outline-none focus:ring-2 focus:ring-green-600 text-xs"
                            >
                                S'inscrire
                            </button>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
