
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      
      {/* Секция последних обновлений */}
      <div className="py-20 bg-[#161b22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Последние обновления</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Следите за развитием Spaceflight Simulator и новыми возможностями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-[#33373E] hover:border-[#9b87f5]/50 transition-all hover-scale">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Обновление игры" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-[#9b87f5] mb-2">10 мая 2023</div>
                <h3 className="text-xl font-semibold text-white mb-2">Обновление 1.5: Новые планеты</h3>
                <p className="text-gray-300 mb-4">Добавлены новые планеты и спутники для исследования.</p>
                <Button variant="link" className="text-[#9b87f5] p-0">Подробнее →</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1F2C] border-[#33373E] hover:border-[#9b87f5]/50 transition-all hover-scale">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Обновление игры" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-[#9b87f5] mb-2">2 апреля 2023</div>
                <h3 className="text-xl font-semibold text-white mb-2">Обновление 1.4: Многоступенчатые ракеты</h3>
                <p className="text-gray-300 mb-4">Улучшена система создания многоступенчатых ракет.</p>
                <Button variant="link" className="text-[#9b87f5] p-0">Подробнее →</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1F2C] border-[#33373E] hover:border-[#9b87f5]/50 transition-all hover-scale">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Обновление игры" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-[#9b87f5] mb-2">15 марта 2023</div>
                <h3 className="text-xl font-semibold text-white mb-2">Обновление 1.3: Улучшенная физика</h3>
                <p className="text-gray-300 mb-4">Переработана физика полёта для большей реалистичности.</p>
                <Button variant="link" className="text-[#9b87f5] p-0">Подробнее →</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              <Link to="/updates">Все обновления</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Секция "Начать играть" */}
      <div className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы начать своё космическое путешествие?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Скачайте Spaceflight Simulator сегодня и отправляйтесь в увлекательное путешествие по Солнечной системе
          </p>
          <Button 
            size="lg" 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white hover-scale"
          >
            Скачать игру
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
