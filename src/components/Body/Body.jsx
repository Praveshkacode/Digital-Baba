import React from 'react';
import Footer from '../Footer/Footer'; // Import Footer

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row flex-1">
        {/* Left Section (Text) */}
        <div className="flex-1 flex items-center justify-center bg-white p-4 md:p-6">
          <div className="text-center md:text-left p-4 md:p-6 border-4 border-orange-500 rounded-xl shadow-lg bg-gray-50">
            <p className="text-left text-2xl font-light text-orange-500">पूज्य</p>
            <h1 className="text-4xl md:text-7xl font-bold text-orange-600 my-2 md:my-4">
              स्वामी राम शंकर
            </h1>
            <p className="text-right text-2xl font-light text-orange-500">जी महाराज</p>
            <div className="mt-4 md:mt-6">
              <p className="text-lg md:text-xl font-medium text-gray-700 italic">
                "अध्यात्म मार्ग का पथिक हूँ
                <br />
                प्राप्त ज्ञान को आत्मसात करने में लगा हूँ।"
              </p>
            </div>
          </div>
        </div>
        {/* Right Section (Image) */}
        <div className="flex-1 flex items-center justify-center bg-white p-4">
          <img
            src="https://scontent.fknu1-4.fna.fbcdn.net/v/t39.30808-6/204253320_357865092371480_155293296620951066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LdpWO6P_CXcQ7kNvgHZouvR&_nc_zt=23&_nc_ht=scontent.fknu1-4.fna&_nc_gid=AL8Bc04SMFy-wFWbeTsNw9G&oh=00_AYAXMCnfFI3KOC7D37umm6gwNEJlG484hQPJNyHDqdnMIg&oe=676B9636"
            alt="Swami Ram Shankar"
            className="rounded-lg shadow-lg w-4/5 md:w-3/4 lg:w-2/3"
          />
        </div>
      </div>

      {/* Embedded Facebook Video */}
      <div className="mt-8 flex justify-center bg-gray-100 p-4">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fswamiramshankar%2Fvideos%2F1317323622643313%2F&show_text=true&width=560&t=0"
            width="100%"
            height="429"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title="Swami Ram Shankar Video"
          />
        </div>
      </div>

    </div>
  );
};

export default Body;
