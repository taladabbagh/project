import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Navigation Bar */}
        <Navbar />

        {/* Sections */}
        <section id="section1" className="p-4">
          <h2>Section 1</h2>
          <p>Content for Section 1...</p>
        </section>

        <section id="section2" className="p-4">
          <h2 className="text-xl font-bold">Section 2</h2>
          <p className="text-lg font-serif text-gray-700">
            Content for Section 2...
          </p>
        </section>

        <section id="section3" className="p-4">
          <h2>Section 3</h2>
          <p>Content for Section 3...</p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
