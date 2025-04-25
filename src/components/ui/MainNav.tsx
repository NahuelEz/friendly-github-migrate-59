
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

export function MainNav() {
  const routes = [
    {
      href: '/',
      label: 'Inicio'
    },
    {
      href: '/case-studies',
      label: 'Casos de Éxito'
    },
    {
      href: '/articulos-de-interes',
      label: 'Artículos'
    },
    {
      href: '/pricing',
      label: 'Precios'
    }
  ];

  return (
    <nav className="flex items-center space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.href === window.location.pathname
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
      <Link
        to="/login"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Iniciar Sesión
      </Link>
    </nav>
  );
}
