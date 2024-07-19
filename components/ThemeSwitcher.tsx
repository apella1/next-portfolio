import { useTheme } from "@/hooks/useTheme";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <BsSun className="text-3xl text-[#ffd700]" />
      ) : (
        <BsMoonFill className="text-2xl text-[#1a202c]" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
