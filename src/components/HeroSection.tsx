
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Фоновое изображение с градиентом */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      {/* Содержимое героя */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Исследуйте космос в Spaceflight Simulator
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Постройте свою ракету, запустите её в космос и исследуйте Солнечную систему в этой увлекательной песочнице космических полётов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white hover-scale"
            >
              Скачать игру
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/tutorials">
                Начать обучение
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
