import React from 'react';



const Homepage = () => {
  return (
    <div className="bg-gray-300 ">
      

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
  rel="stylesheet"
/>

      {/* Header Section */}
      <header className="sticky top-0 bg-red-700 text-white font-serif">
        <div className="max-w-screen-xl font-serif mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <img src="/icons8-video-100.png" alt="Vidionotes Logo" className="h-14 w-auto" />
            <h1 className="text-xl font-bold font-serif">
              Vidionotes</h1>
          </div>
          <nav className="space-x-6 text-right font-serif">
            <a href="#home" className="hover:text-gray-300 font-serif">Home</a>
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#about" className="hover:text-gray-300">About Us</a>
            <a href="#contact" className="hover:text-gray-300">Contact Us</a>
            <a href="#contact" className="hover:text-gray-300">FAQs</a>
            
            <a href="#login" className="hover:text-gray-300">Login</a>
            <a href="#signup" className="hover:text-gray-300">Signup</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Capture and Organize Video Insights Effortlessly
        </h1>
        <p className="text-lg mb-6">
          Save key video moments, bookmark important timestamps, and manage clips seamlessly with Vidionotes.
        </p>
        <div>
          <a href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold mr-4">
            Get Started – It's Free!
          </a>
          <a href="/learn-more" className="border border-white px-6 py-3 rounded-full font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </section>

    <section className="py-16 font-serif">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center">
          <h3 className="text-xl font-semibold text-black">Save Key Video Moments</h3>
          <img src="/icons8-video-100.png" alt="Save Video" className="mx-auto my-4 w-24 h-24" />
          <p className="text-gray-700">
            Capture and store important video clips effortlessly. No more scrubbing through hours of content—save only what matters!
          </p>
        </div>
          
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center">
          <h3 className="text-xl font-semibold text-black">Save Key Video Moments</h3>
          <img src="/icons8-video-100.png" alt="Save Video" className="mx-auto my-4 w-24 h-24" />
          <p className="text-gray-700">
            Capture and store important video clips effortlessly. No more scrubbing through hours of content—save only what matters!
          </p>
        </div>
          
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center">
          <h3 className="text-xl font-semibold text-black">Save Key Video Moments</h3>
          <img src="/icons8-video-100.png" alt="Save Video" className="mx-auto my-4 w-24 h-24" />
          <p className="text-gray-700">
            Capture and store important video clips effortlessly. No more scrubbing through hours of content—save only what matters!
          </p>
        </div>
      </div>
      </div>
    </section>

    <section className="py-16 bg-gray-300 font-serif">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-video text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Save key moments effortlessly.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-bookmark text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Easily bookmark timestamps for quick access.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-folder text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Organize your clips into folders for smooth navigation.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-share text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Share your favorite clips with friends.</p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-search text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Search and filter clips based on tags.</p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <i className="fas fa-sync text-4xl text-red-600"></i>
            </div>
            <p className="text-lg text-black">Sync your clips across all devices.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-300 font-serif">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Card: Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold text-black mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-lg text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-700">Your Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
              />
            </div>
            <button 
              type="submit" 
              className="bg-red-600 text-white py-2 px-6 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Card: Heading */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
          <div>
            <h3 className="text-3xl font-semibold text-black mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-700">
              We'd love to hear from you! If you have any questions or feedback, feel free to reach out to us.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-300 font-serif">
      <div className="max-w-screen-xl mx-auto text-center font-serif">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">How do I use Vidionotes?</h3>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              To use Vidionotes, install the extension, sign up or log in, and start saving video timestamps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">Can I sync my video notes across multiple devices?</h3>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Yes, your notes will be synced across all devices as long as you are logged into your account.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">Is Vidionotes free?</h3>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Vidionotes offers a free version with basic features. A premium version is available for more advanced features.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">How do I bookmark a video timestamp?</h3>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              To bookmark a timestamp, click the Vidionotes icon in your browser and select the time you want to save.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">What types of videos can I save clips from?</h3>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              You can save clips from YouTube and other supported video platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* All Rights Reserved */}
        <div className="text-center text-gray-400 mb-8">
          <h2 className="text-xl">All Rights Reserved</h2>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="text-gray-400">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/about-us" className="hover:text-white">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Home */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-white">Homepage</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <p className="text-gray-400">
              123 Vidionotes St, <br />
              Suite 101, <br />
              City, Country
            </p>
          </div>

          {/* Reach Out */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reach Out</h3>
            <ul className="text-gray-400">
              <li><a href="mailto:contact@vidionotes.com" className="hover:text-white">Email</a></li>
              <li><a href="https://www.instagram.com/vidionotes" className="hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/vidionotes" className="hover:text-white" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Homepage;
