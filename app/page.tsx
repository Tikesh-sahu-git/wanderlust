"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">TikeshDev</h1>

          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <Link href="#about" className="hover:text-indigo-600">About</Link>
            <Link href="#contact" className="hover:text-indigo-600">Contact</Link>
          </div>

          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 border rounded-lg hover:bg-gray-100">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-20">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-bold mb-6">
            Build Modern Web Apps 🚀
          </h2>
          <p className="mb-6 text-lg">
            Full Stack Developer specializing in Next.js, DevOps, and Cloud Deployment.
          </p>
          <Link href="#contact">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a Full Stack Developer with experience in building scalable web
            applications using Next.js, React, and DevOps tools like Docker,
            Kubernetes, and AWS. I love creating modern UI and deploying
            production-ready apps.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 TikeshDev. All rights reserved.</p>
      </footer>

    </div>
  );
}