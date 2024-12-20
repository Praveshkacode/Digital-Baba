import React from 'react';
import { FaFacebook, FaInstagram, FaBlog, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 border-b border-gray-200">
        {/* Title Section */}
        <div className="text-3xl md:text-4xl font-bold text-orange-500 text-center md:text-left">
          पूज्य स्वामी राम शंकर (डिजिटल बाबा)
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 flex md:flex-row flex-wrap md:space-x-4 items-center justify-center space-x-6 md:space-x-0">
          {/* Mobile and Desktop Icons */}
          <a
            className="text-gray-600 hover:text-orange-500 text-xl md:block"
            href="https://www.facebook.com/swamiramshankar"
          >
            <FaFacebook className="inline-block mr-2" />
            Pages
          </a>
          <a
            className="text-gray-600 hover:text-orange-500 text-xl md:block"
            href="https://www.instagram.com/swamiramshankar?fbclid=IwZXh0bgNhZW0CMTAAAR0EiPN2lzO00wc-wGUfYx5MN1zz-OxhuixSvwvNhOlJ6bdie29-q6zT2Ws_aem_xgpOlkzqZtH-2Ylmqsf-lw"
          >
            <FaInstagram className="inline-block mr-2" />
            Insta
          </a>
          <a
            className="text-gray-600 hover:text-orange-500 text-xl md:block"
            href="https://swamiramshankarpoems.blogspot.com/?fbclid=IwZXh0bgNhZW0CMTAAAR2R7Hs-LNeiFrzMtzjUVAsIIpf96U5ivgPWGbTnAu1f_PQCYlfaz3Vfif0_aem_JcuObAnlY56CAqdfrGncTA"
          >
            <FaBlog className="inline-block mr-2" />
            Blogs
          </a>
          <a
            className="text-gray-600 hover:text-orange-500 text-xl md:block"
            href="/about-us"
          >
            <FaInfoCircle className="inline-block mr-2" />
            About Us
          </a>
          <a
            className="bg-orange-500 text-white px-4 py-1 rounded-lg text-xl hover:bg-orange-600 md:block"
            href="https://api.whatsapp.com/send?phone=%2B917839364379&context=ARDsLVvz_BHk3VExRzwE2HQ6MAxtIrJlE_xCUlprMM_GrlP10hj_2ftZMTh3k8wdElHA34mlhu8M_Vx-euUWqrYXNT3pLbUAcfBCp2kHs5nwXV1MUERcoTLCjkfhnYT4zCJV_tlcOVsJ9GM7qydqdBHP3g&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR2PH4wWvpkKN7rApR4j9VAkxS392cv4sP7b9mQ6rdBs5UnArBojqMfZghw_aem_MsYFGsVdiMb96BDxJKMh2g"
          >
            <FaWhatsapp className="inline-block mr-2" />
            WhatsApp
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
