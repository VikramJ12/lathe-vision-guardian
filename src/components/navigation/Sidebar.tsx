
import { NavLink } from "react-router-dom";
import { 
  ChartBar,
  CircleAlert,
  ThermometerIcon,
  FileChartLine,
} from "lucide-react";

const navItems = [
  {
    title: "Machine Performance",
    path: "/performance",
    icon: <ChartBar className="w-5 h-5" />,
  },
  {
    title: "Failure Types",
    path: "/failures",
    icon: <CircleAlert className="w-5 h-5" />,
  },
  {
    title: "Sensor Data",
    path: "/sensor-data",
    icon: <ThermometerIcon className="w-5 h-5" />,
  },
  {
    title: "Product Analysis",
    path: "/product-analysis",
    icon: <FileChartLine className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-industrial-blue text-white w-64 min-h-screen flex flex-col py-6 px-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-center">Lathe Vision</h1>
        <p className="text-xs text-center opacity-70">Predictive Maintenance Dashboard</p>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-white/10 text-white font-medium" 
                      : "text-gray-300 hover:bg-white/5"
                  }`
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="text-xs text-gray-300 text-center">
          <p>© 2025 Lathe Vision Guardian</p>
          <p className="opacity-70">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
