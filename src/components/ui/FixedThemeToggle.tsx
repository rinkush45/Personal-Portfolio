import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FixedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-5 right-5 z-[9999]">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={cn(
          "p-2.5 backdrop-blur-md bg-background/30 rounded-full border border-border/40 shadow-lg",
          "transition-all duration-300 hover:scale-110",
          "flex items-center justify-center"
        )}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-indigo-500" />
        )}
      </button>
    </div>
  );
} 