
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { RocketIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full bg-[#0d1117] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2">
          <RocketIcon className="h-6 w-6 text-[#9b87f5]" />
          <span className="text-xl font-bold">Spaceflight Simulator</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Заменяем Link обернутый в NavigationMenuLink на простой NavigationMenuLink */}
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Главная</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>О игре</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem to="/features" title="Особенности">
                    Узнайте о ключевых возможностях и механиках игры
                  </ListItem>
                  <ListItem to="/gallery" title="Галерея">
                    Скриншоты и видео из игрового процесса
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {/* Аналогично здесь */}
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/tutorials">Руководства</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const ListItem = ({
  className,
  title,
  children,
  to,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBar;
