import React from 'react';
interface ImageCardProps {
    imageSrc: string;
    title: string;
    description: string;
  }
const ImageCard: React.FC<ImageCardProps>  = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const Center = () => {
    
  return (
    <div className="container mx-auto p-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ImageCard
        imageSrc="https://via.placeholder.com/400x300"
        title="Image 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ImageCard
        imageSrc="https://via.placeholder.com/400x300"
        title="Image 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ImageCard
        imageSrc="https://via.placeholder.com/400x300"
        title="Image 3"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  </div>
  )
}

export default Center