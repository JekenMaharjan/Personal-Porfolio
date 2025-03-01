'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-sky-900 shadow-md fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold">Jeken Maharjan</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center p-5 space-y-6 pt-24 bg-gray-800">
        <Image src="/profile.jpg" width={150} height={150} alt="Jeken Maharjan" className="rounded-full border-4 border-pink-500" />
        <h2 className="text-5xl font-bold">Hi, I'm Jeken Maharjan</h2>
        <p className="text-gray-400 text-lg">A Passionate Full-Stack Developer | MERN Stack Enthusiast</p>
        <a href="#projects" className="mt-5 px-6 py-3 bg-pink-500 rounded-lg hover:bg-pink-600">View My Work</a>
      </section>
      
      {/* About Section */}
      <section id="about" className="p-20 text-center space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          I am a computer engineering student passionate about web development. I specialize in building dynamic and responsive web applications using the MERN stack.
        </p>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="p-20 text-center space-y-6 bg-gray-800">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">JavaScript</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">React.js</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Node.js</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">MongoDB</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Tailwind CSS</div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">Next.js</div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="p-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">E-commerce Website - OfficeCare</h3>
            <p className="text-gray-400">Currently building an e-commerce platform with features like product listing, cart
            management, and secure checkout for a seamless shopping experience using MERN Stack.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Advanced Calculator </h3>
            <p className="text-gray-400">Developed a web-based calculator with advanced mathematical functions and a
            responsive user interface.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Responsive Web Application Form</h3>
            <p className="text-gray-400">Developed a dynamic web form with a responsive UI for user input, using HTML, CSS,
            and JavaScript for the front end and PHP for server-side processing.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="p-20 text-center space-y-6 bg-gray-800">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400">Feel free to reach out for collaboration or project inquiries.</p>
        <a href="mailto:maharjanjeken@gmail.com" className="mt-5 px-6 py-3 bg-pink-500 rounded-lg hover:bg-pink-600">Send Email</a>
      </section>
      
      {/* Footer */}
      <footer className="text-center p-8 bg-gray-900">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Jeken Maharjan. All rights reserved.</p>
      </footer>
    </div>
  );
}
