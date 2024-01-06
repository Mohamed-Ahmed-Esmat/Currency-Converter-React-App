import { Link } from 'react-router-dom';

function SideNavBar() {
  return (
    <div className="w-1/5 p-4 bg-gray-800 text-white">
      <Link className="block py-2 hover:underline" to="/">Home</Link>
      <Link className="block py-2 hover:underline" to="/services">Services</Link>
      <Link className="block py-2 hover:underline" to="/clients">Clients</Link>
      <Link className="block py-2 hover:underline" to="/contact">Contact</Link>
    </div>
  );
}

export default SideNavBar;
