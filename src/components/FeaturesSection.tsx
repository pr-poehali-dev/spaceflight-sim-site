
import FeatureCard from "./FeatureCard";
import { Rocket, Globe, Atom, Gauge, PenTool, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Особенности игры</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Spaceflight Simulator предлагает реалистичный и захватывающий опыт космических полётов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Rocket className="w-6 h-6" />}
            title="Конструктор ракет"
            description="Создавайте свои собственные ракеты с реалистичной физикой и поведением деталей"
          />
          
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Солнечная система"
            description="Исследуйте планеты, луны и другие небесные тела с реалистичными орбитами"
          />
          
          <FeatureCard 
            icon={<Atom className="w-6 h-6" />}
            title="Реалистичная физика"
            description="Полная симуляция гравитации и орбитальной механики на основе законов физики"
          />
          
          <FeatureCard 
            icon={<Gauge className="w-6 h-6" />}
            title="Управление полётом"
            description="Контролируйте каждый аспект вашего полёта от запуска до стыковки"
          />
          
          <FeatureCard 
            icon={<PenTool className="w-6 h-6" />}
            title="Режим песочницы"
            description="Свободно экспериментируйте без ограничений ресурсов и с полным контролем"
          />
          
          <FeatureCard 
            icon={<Zap className="w-6 h-6" />}
            title="Постоянные обновления"
            description="Игра регулярно обновляется новыми функциями и улучшениями"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
