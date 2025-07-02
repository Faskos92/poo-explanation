import { useState } from 'react';
import { Play, User, Car, Code, Eye, EyeOff } from 'lucide-react';

export default function POOExplanation() {
  const [activeTab, setActiveTab] = useState('concepts');
  const [showCode, setShowCode] = useState(false);
  const [carState, setCarState] = useState({
    speed: 0,
    isRunning: false,
    fuel: 100
  });
  const [personState, setPersonState] = useState({
    name: 'Alice',
    age: 25,
    energy: 100
  });

  const startCar = () => {
    if (carState.fuel > 0) {
      setCarState(prev => ({
        ...prev,
        speed: 50,
        isRunning: true,
        fuel: Math.max(0, prev.fuel - 10)
      }));
    }
  };

  const stopCar = () => {
    setCarState(prev => ({
      ...prev,
      speed: 0,
      isRunning: false
    }));
  };

  const makePersonRun = () => {
    if (personState.energy > 0) {
      setPersonState(prev => ({
        ...prev,
        energy: Math.max(0, prev.energy - 20)
      }));
    }
  };

  const restPerson = () => {
    setPersonState(prev => ({
      ...prev,
      energy: Math.min(100, prev.energy + 30)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Comprendre la POO 🚀
      </h1>

      {/* Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-md">
          <button
            onClick={() => setActiveTab('concepts')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'concepts' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Concepts
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'demo' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Démo Interactive
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'pillars' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Les 4 Piliers
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'concepts' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Qu'est-ce que la POO ?</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">💡 L'idée principale</h3>
              <p className="text-gray-700">
                La POO organise le code en <strong>objets</strong> qui représentent des entités du monde réel. 
                Chaque objet a des <strong>propriétés</strong> (caractéristiques) et des <strong>méthodes</strong> (actions).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🏭 Classe</h4>
                <p className="text-sm text-gray-700">
                  Le "moule" ou "plan" pour créer des objets. Définit les propriétés et méthodes communes.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🎯 Objet</h4>
                <p className="text-sm text-gray-700">
                  Une "instance" créée à partir d'une classe. C'est l'entité concrète avec ses propres valeurs.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">🌟 Pourquoi la POO ?</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Réutilisabilité :</strong> Écrire une fois, utiliser partout</li>
                <li>• <strong>Organisation :</strong> Code structuré et facile à comprendre</li>
                <li>• <strong>Maintenance :</strong> Modifications localisées et sûres</li>
                <li>• <strong>Modularité :</strong> Chaque objet a sa responsabilité</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'demo' && (
        <div className="space-y-6">
          {/* Car Demo */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Car className="text-blue-500" />
                Classe Voiture
              </h2>
              <button
                onClick={() => setShowCode(!showCode)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {showCode ? <EyeOff size={16} /> : <Eye size={16} />}
                {showCode ? 'Masquer' : 'Voir'} le code
              </button>
            </div>

            {showCode && (
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 text-sm font-mono overflow-x-auto">
                <span className="text-blue-300">class</span> <span className="text-yellow-300">Voiture</span>:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">__init__</span>(self):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.vitesse = <span className="text-purple-300">0</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.moteur_allume = <span className="text-purple-300">False</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.essence = <span className="text-purple-300">100</span>
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">demarrer</span>(self):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">if</span> self.essence &gt; <span className="text-purple-300">0</span>:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.vitesse = <span className="text-purple-300">50</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.moteur_allume = <span className="text-purple-300">True</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.essence -= <span className="text-purple-300">10</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">print</span>(<span className="text-green-300">"Vrooom! La voiture démarre!"</span>)
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">arreter</span>(self):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.vitesse = <span className="text-purple-300">0</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.moteur_allume = <span className="text-purple-300">False</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">print</span>(<span className="text-green-300">"La voiture s'arrête."</span>)
                <br /><br />
                <span className="text-gray-500"># Utilisation :</span>
                <br />
                ma_voiture = <span className="text-yellow-300">Voiture</span>()
                <br />
                ma_voiture.demarrer()
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">État de la voiture :</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Vitesse :</span>
                    <span className="font-mono">{carState.speed} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moteur :</span>
                    <span className={`font-mono ${carState.isRunning ? 'text-green-600' : 'text-red-600'}`}>
                      {carState.isRunning ? '🟢 Allumé' : '🔴 Éteint'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Essence :</span>
                    <span className="font-mono">{carState.fuel}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Actions (méthodes) :</h3>
                <div className="space-y-2">
                  <button
                    onClick={startCar}
                    disabled={carState.fuel === 0}
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    🚗 demarrer()
                  </button>
                  <button
                    onClick={stopCar}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    🛑 arreter()
                  </button>
                  <button
                    onClick={() => setCarState(prev => ({ ...prev, fuel: 100 }))}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    ⛽ faire_le_plein()
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Person Demo */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
              <User className="text-purple-500" />
              Classe Personne
            </h2>

            <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 text-sm font-mono overflow-x-auto">
              <span className="text-blue-300">class</span> <span className="text-yellow-300">Personne</span>:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">__init__</span>(self, nom, age):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.nom = nom
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.age = age
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.energie = <span className="text-purple-300">100</span>
              <br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">courir</span>(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">if</span> self.energie &gt; <span className="text-purple-300">0</span>:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.energie -= <span className="text-purple-300">20</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">print</span>(<span className="text-green-300">f"{'{'}self.nom{'}'} court !"</span>)
              <br /><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">def</span> <span className="text-yellow-300">se_reposer</span>(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.energie = <span className="text-blue-300">min</span>(<span className="text-purple-300">100</span>, self.energie + <span className="text-purple-300">30</span>)
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">État de {personState.name} :</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Nom :</span>
                    <span className="font-mono">{personState.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Âge :</span>
                    <span className="font-mono">{personState.age} ans</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Énergie :</span>
                    <span className="font-mono">{personState.energy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${personState.energy}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Actions (méthodes) :</h3>
                <div className="space-y-2">
                  <button
                    onClick={makePersonRun}
                    disabled={personState.energy === 0}
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    🏃‍♀️ courir()
                  </button>
                  <button
                    onClick={restPerson}
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    😴 se_reposer()
                  </button>
                  <input
                    type="text"
                    value={personState.name}
                    onChange={(e) => setPersonState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Changer le nom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pillars' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-3">🏗️ Encapsulation</h3>
            <p className="text-gray-700 mb-3">
              Regrouper les données et méthodes dans un même objet, et contrôler l'accès aux propriétés internes.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg text-sm font-mono">
              <span className="text-blue-600">class</span> CompteBancaire:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">def</span> __init__(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__solde = <span className="text-purple-600">0</span>  <span className="text-gray-500"># Privé !</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">def</span> deposer(self, montant):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__solde += montant
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-3">🧬 Héritage</h3>
            <p className="text-gray-700 mb-3">
              Une classe peut hériter des propriétés et méthodes d'une autre classe (classe parent).
            </p>
            <div className="bg-green-50 p-3 rounded-lg text-sm font-mono">
              <span className="text-blue-600">class</span> Animal:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">def</span> dormir(self): ...
              <br /><br />
              <span className="text-blue-600">class</span> Chien(Animal):  <span className="text-gray-500"># Hérite</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">def</span> aboyer(self): ...
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-600 mb-3">🎭 Polymorphisme</h3>
            <p className="text-gray-700 mb-3">
              Plusieurs classes peuvent avoir des méthodes de même nom mais avec des comportements différents.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg text-sm font-mono">
              chat.faire_du_bruit()  <span className="text-gray-500"># "Miaou"</span>
              <br />
              chien.faire_du_bruit()  <span className="text-gray-500"># "Woof"</span>
              <br />
              vache.faire_du_bruit()  <span className="text-gray-500"># "Meuh"</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 mb-3">🎨 Abstraction</h3>
            <p className="text-gray-700 mb-3">
              Cacher la complexité interne et ne montrer que les fonctionnalités essentielles.
            </p>
            <div className="bg-orange-50 p-3 rounded-lg text-sm font-mono">
              voiture.demarrer()  <span className="text-gray-500"># Simple à utiliser</span>
              <br />
              <span className="text-gray-500"># Mais cache :</span>
              <br />
              <span className="text-gray-500"># - injection carburant</span>
              <br />
              <span className="text-gray-500"># - allumage moteur</span>
              <br />
              <span className="text-gray-500"># - etc...</span>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-3">🎯 En résumé</h2>
        <p className="mb-2">
          La POO te permet d'organiser ton code Python comme des objets du monde réel, avec leurs propriétés et leurs actions.
        </p>
        <p>
          <strong>Avantage clé :</strong> Code plus lisible, réutilisable et facile à maintenir ! 
          Pense "objets" plutôt que "fonctions isolées".
        </p>
      </div>
    </div>
  );
}