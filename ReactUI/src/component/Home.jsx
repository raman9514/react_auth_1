import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
          <p className="text-gray-600 text-lg">
            The simplest way to manage your tasks, track your goals, and stay organized.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Easy to Use</h3>
            <p className="text-gray-600 text-sm">
              Designed with simplicity in mind, so you can focus on what matters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">
              Your data is encrypted and safe. We respect your privacy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Accessible Anywhere</h3>
            <p className="text-gray-600 text-sm">
              Access your account from any device, anytime, anywhere.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
