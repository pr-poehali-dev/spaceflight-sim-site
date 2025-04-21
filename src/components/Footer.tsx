
import { RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white border-t border-[#33373E]">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <RocketIcon className="h-6 w-6 text-[#9b87f5]" />
              <span className="text-xl font-bold">Spaceflight Simulator</span>
            </div>
            <p className="text-gray-300 mb-4">
              Реалистичный симулятор космических полётов, позволяющий игрокам исследовать вселенную.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Главная</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Особенности</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">Галерея</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-white">Руководства</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Discord</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Reddit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#33373E] mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 Spaceflight Simulator. Этот сайт является неофициальным.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
