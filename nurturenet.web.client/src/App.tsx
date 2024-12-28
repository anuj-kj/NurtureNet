import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import ContactRedux from './pages/Contact/ContactRedux';
import Organizations from './pages/Organization/organizations';

const Home = () => (
    <>
        <Hero />
        <section id="features" className="py-5">
            <div className="container">
                <h2 className="text-center">Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Feature One</h3>
                        <p>Some amazing feature description.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Feature Two</h3>
                        <p>Some amazing feature description.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Feature Three</h3>
                        <p>Some amazing feature description.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

const About = () => <div className="container py-5"><h1>About Page</h1></div>;


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-redux" element={<ContactRedux />} />
                <Route path="/organizations" element={<Organizations />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
