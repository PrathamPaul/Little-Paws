import React from 'react';

const MainPetGridSection = () => {
  const pets = [
    {
      id: 1,
      name: 'Esme and Ralda',
      image: 'https://placekitten.com/300/200', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Layla',
      image: 'https://placekitten.com/301/200',
    },
    {
      id: 3,
      name: 'Brown',
      image: 'https://placekitten.com/302/200',
    },
    {
      id: 4,
      name: 'Roy',
      image: 'https://placekitten.com/303/200',
    },
    {
      id: 5,
      name: 'Kristen',
      image: 'https://placekitten.com/304/200',
    },
    {
      id: 6,
      name: 'Jack and Daniel',
      image: 'https://placekitten.com/305/200',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Who are waiting for You?
          </h2>
          <p className="text-sm text-gray-600">
            If you want to know more about a pet, just click on its box.
          </p>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 text-center font-medium">
                  {pet.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center">
          <button className="bg-[#D4C6A6] hover:bg-[#c4b696] text-white font-medium px-8 py-2 rounded-full transition-colors">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainPetGridSection;