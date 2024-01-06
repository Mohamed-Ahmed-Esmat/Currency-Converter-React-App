import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className={`fixed top-0 left-0 p-4 z-10 ${isOpen ? 'hidden' : 'block'}`} onClick={() => setIsOpen(true)}>
        <span className=' text-white'>Open menu</span>
      </button>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close menu' : 'Open menu'}
        </button>
        {isOpen && (
          <>
            <Link className="block py-2 hover:underline" to="/">Home</Link>
            <Link className="block py-2 hover:underline" to="/services">Services</Link>
            <Link className="block py-2 hover:underline" to="/clients">Clients</Link>
            <Link className="block py-2 hover:underline" to="/contact">Contact</Link>
          </>
        )}
      </div>
    </>
  );
}

export default SideNavBar;