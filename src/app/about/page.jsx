import React from 'react';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-500 mb-4">About Us</h1>
      <p className="text-lg leading-relaxed text-gray-800 mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia soluta expedita dicta illum dignissimos assumenda fuga corporis nesciunt reprehenderit vero? Velit labore cumque dignissimos molestiae repellat dolores maxime dolorum explicabo!
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        Earum eligendi magni at sunt dolorum. Vero, perferendis dignissimos molestiae consectetur explicabo temporibus debitis placeat voluptatum sint neque sed aliquam cumque in, quisquam dolore dicta inventore porro quibusdam blanditiis aspernatur?
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatum architecto recusandae deleniti sit dolorum esse, unde aspernatur et. Voluptate dolorum iste delectus maiores repellat esse quos tenetur magnam sint!
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        Illo sit architecto id eius dolorem corporis quasi unde eveniet a eos. Est qui cupiditate nisi tenetur adipisci hic, itaque molestias possimus magni doloremque ducimus iure consectetur, quasi, voluptas eveniet?
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        Voluptatem quae in quas ipsa dolor fugit minus ipsam repellat officiis placeat, ullam similique tempore, molestiae atque debitis adipisci perspiciatis. Ipsum quam eveniet beatae, voluptate officiis recusandae? Ullam, esse corrupti!
      </p>
      {/* Optional Image Section */}
      <div className="mt-8">
        <img
          src="path_to_your_image.jpg" // Replace with your image source
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutPage;
