import SocialIcons from "@/app/components/SocialIcons";

export default function Footer() {
  return (
      <footer className="bg-[#F4F4F4] text-black py-8">
          <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 ml-20">
                      <p>Un abri moto novateur, sécurisé et équipé d'une solution intégrée pour la recharge électrique
                          des motos</p>
                      <div className="mt-4">
                          <SocialIcons/>
                      </div>
                  </div>
                  <div className="col-span-2">
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Navigation</h3>
                      <ul>
                          <li><a href="#" className="hover:underline c">Accueil</a></li>
                          <li><a href="#" className="hover:underline">A propos</a></li>
                          <li><a href="#" className="hover:underline">Réalisations</a></li>
                          <li><a href="#" className="hover:underline">Nos partenaires</a></li>
                          <li><a href="#" className="hover:underline">Ils parlent de nous</a></li>
                      </ul>
                  </div>
                  <div className="col-span-2">
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Nos réalisations</h3>
                      <ul>
                          <li><a href="#" className="hover:underline c">Kandy</a></li>
                          <li><a href="#" className="hover:underline">SecuredCage</a></li>
                          <li><a href="#" className="hover:underline">HandBar</a></li>
                          <li><a href="#" className="hover:underline">SecureIt</a></li>
                          <li><a href="#" className="hover:underline">ConnectGuardCycle</a></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Aide</h3>
                      <ul>
                          <li><a href="#" className="hover:underline c">FAQ</a></li>
                          <li><a href="#" className="hover:underline">Nous contacter</a></li>
                      </ul>
                  </div>
                  <div className="col-span-3 mr-3">
                      <h3 className="text-lg font-semibold mb-4 text-green-600">S'inscrire à notre newsletter</h3>
                      <ul>
                          <li><a href="#" className="hover:underline c">Rester informé des derniéres annonces et des
                              conseils.</a></li>
                          <input
                              type="email"
                              placeholder="Adresse mail"
                              className="mt-5 w-[200px] h-[48px] rounded-[47px] border-[1px] border-gray-300 p-2 bg-[#CCCCCC] focus:ring-2 focus:ring-green-600 focus:outline-none"
                          />
                          <button
                              className="mt-5 w-[200px] h-[48px] rounded-[47px] p-[14px_36px_14px_36px] bg-[#007200] text-white font-semibold hover:bg-[#005d00] focus:outline-none focus:ring-2 focus:ring-green-600">
                              S'inscrire
                          </button>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  );
}
