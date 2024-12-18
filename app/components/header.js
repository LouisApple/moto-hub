export default function Header() {
  return (
      <div>
          <nav>
              <ul>
                <li className="flex space-x-8 justify-center p-5 bg-gray-300">
                  <img src="/images/moto.png"/>
                  <h3>Accueil</h3>
                  <h3>A propos</h3>
                  <h3>Réalisations</h3>
                  <h3>Nos Projets</h3>
                  <h3>Nos partenaires</h3>
                  <h3>Ils parlent de nous</h3>
                  <button className="bg-green-800 rounded text-white p-2 ml-3">Nous contacter</button>
                </li>
              </ul>
          </nav>        
      </div>
  );
}
