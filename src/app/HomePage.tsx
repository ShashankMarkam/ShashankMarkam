"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  const thumbnails = [
    {
      title: "MrBeast Reaction Concept",
      stats: "+2.3M views, +45% CTR boost",
      imageUrl: "https://placehold.co/1280x720/000000/FFFFFF/png?text=MrBeast+Concept",
    },
    {
      title: "Tech Review Thumbnail",
      stats: "+1.8M views, +38% CTR boost",
      imageUrl: "https://placehold.co/1280x720/1a1a1a/FFFFFF/png?text=Tech+Review",
    },
    {
      title: "Lifestyle Vlog Thumbnail",
      stats: "+980K views, +52% CTR boost",
      imageUrl: "https://placehold.co/1280x720/333333/FFFFFF/png?text=Lifestyle+Vlog",
    },
    {
      title: "Educational Content Thumbnail",
      stats: "+1.2M views, +41% CTR boost",
      imageUrl: "https://placehold.co/1280x720/4d4d4d/FFFFFF/png?text=Education",
    },
    {
      title: "Gaming Montage Thumbnail",
      stats: "+3.1M views, +48% CTR boost",
      imageUrl: "https://placehold.co/1280x720/666666/FFFFFF/png?text=Gaming+Montage",
    },
    {
      title: "Documentary Thumbnail",
      stats: "+750K views, +35% CTR boost",
      imageUrl: "https://placehold.co/1280x720/808080/FFFFFF/png?text=Documentary",
    },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex min-h-screen flex-col items-center justify-center p-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Crafting Clicks through Design Precision.
        </h1>
        <a
          href="#portfolio"
          onClick={handleScroll}
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
        >
          View Portfolio
        </a>
      </motion.section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Selected Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {thumbnails.map((thumb, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-video">
                <img src={thumb.imageUrl} alt={thumb.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-bold text-white text-center">{thumb.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{thumb.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">From Concept to Click</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Every thumbnail begins with psychology, not pixels. My process involves deep research into your audience and content, ensuring every design element serves a purpose: to grab attention and earn the click.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Trusted by Creators</h2>
          <div className="space-y-8">
            <blockquote className="text-xl italic text-gray-300">
              &ldquo;Jules completely transformed our channel's click-through rate. The thumbnails are not just beautiful; they're smart.&rdquo;
              <cite className="block text-base not-italic text-gray-500 mt-4">- Alex from TechFlow</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet the Designer</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate thumbnail designer with a mission to craft visuals that not only look stunning but also drive clicks. My process blends artistic creativity with data-driven insights to create thumbnails that captivate audiences and boost content performance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&#39;s build your next viral thumbnail.</h2>
          <a href="mailto:hello@designer.com" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded-full transition-colors duration-300 text-lg">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Jules Portfolio. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
