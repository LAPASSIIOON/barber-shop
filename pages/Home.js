import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Services from '../components/Services.js';
import BarberProfiles from '../components/BarberProfiles.js';
import BusinessPain from '../components/BusinessPain.js';
import BeforeAfter from '../components/BeforeAfter.js';
import BookingForm from '../components/BookingForm.js';
import Gallery from '../components/Gallery.js';
import Testimonials from '../components/Testimonials.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

export default function Home() {
  const components = [
    Navbar(),
    Hero(),
    Services(),
    BarberProfiles(),
    BeforeAfter(),
    BusinessPain(),
    BookingForm(),
    Gallery(),
    Testimonials(),
    Contact(),
    Footer()
  ];

  const render = () => {
    return components.map(c => c.render()).join('\n');
  };

  const afterRender = () => {
    components.forEach(c => c.afterRender());
  };

  return { render, afterRender };
}
