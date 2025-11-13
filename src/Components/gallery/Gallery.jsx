import React from "react";

// ধরি আপনার JSON ডেটা এই ফাইলেই আছে
const galleryImages = [
  {
    id: 1,
    url: "https://i.ibb.co.com/39jdzR99/blooddonate.webp",
    alt: "Blood Donation",
    caption: "Blood Donation",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/Gfbmf97s/childrenday1.jpg",
    alt: "Childrens day celebrate",
    caption: "We celebrated the children day",
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/kghRVt00/tree2.jpg",
    alt: "Tree Plantation",
  },
  {
    id: 4,
    url: "https://i.ibb.co.com/JRnWdzfy/clean1.webp",
    alt: "Road Cleaning",
  },
  {
    id: 5,
    url: "https://i.ibb.co.com/nssCjHp5/tree1.jpg",
    alt: "Tree plantation",
  },
];

const ImageGallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-indigo-500 pb-2 inline-block mx-auto">
        What We do?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white transform transition duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover transition duration-500 group-hover:opacity-80"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xl font-semibold text-white truncate">
                  {image.caption}
                </p>
                <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                  {image.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {galleryImages.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-xl">No photos</p>
      )}
    </div>
  );
};

export default ImageGallery;
