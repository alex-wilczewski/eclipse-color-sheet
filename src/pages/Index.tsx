import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import ColorSwatch from "@/components/ColorSwatch";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <head>
        <title>Color Cheat Sheet</title>
        <meta name="description" content="A beautiful color palette reference featuring Twilight, Pumice, and accent colors. Click to copy hex codes." />
      </head>
      
      <main className="h-screen bg-background p-4 md:p-6 lg:p-8 relative">
        <div className="max-w-6xl mx-auto h-full flex flex-col gap-3">
          
          {/* Twilight Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 animate-fade-in flex-1" style={{ animationDelay: "0ms" }}>
            <ColorSwatch
              name="Twilight 100"
              hex="#E9E9FC"
              bgClass="bg-twilight-100"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Twilight 200"
              hex="#D3D1F8"
              bgClass="bg-twilight-200"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Twilight 300"
              hex="#BDBBF5"
              bgClass="bg-twilight-300"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Twilight 700"
              hex="#4D48E2"
              bgClass="bg-twilight-800"
              textDark={false}
              className="h-full"
            />
            <ColorSwatch
              name="Twilight 900"
              hex="#211ADB"
              bgClass="bg-twilight-900"
              textDark={false}
              className="h-full"
            />
          </div>

          {/* Pumice Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in flex-1" style={{ animationDelay: "100ms" }}>
            <ColorSwatch
              name="Pumice 100"
              hex="#FFFEFC"
              bgClass="bg-pumice-100"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Pumice 200"
              hex="#FCF9F2"
              bgClass="bg-pumice-200"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Pumice 300"
              hex="#F7F0DF"
              bgClass="bg-pumice-300"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Pumice 400"
              hex="#EEE0BE"
              bgClass="bg-pumice-400"
              textDark={true}
              className="h-full"
            />
          </div>

          {/* Accent Colors Row */}
          <div className="grid grid-cols-3 gap-3 animate-fade-in flex-1" style={{ animationDelay: "200ms" }}>
            <ColorSwatch
              name="Moss 100"
              hex="#E7FE96"
              bgClass="bg-moss-100"
              textDark={true}
              className="h-full"
            />
            <ColorSwatch
              name="Lavender 100"
              hex="#BA81EB"
              bgClass="bg-lavender-100"
              textDark={false}
              className="h-full"
            />
            <ColorSwatch
              name="Moonlight 100"
              hex="#81B2EB"
              bgClass="bg-moonlight-100"
              textDark={false}
              className="h-full"
            />
          </div>
        </div>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
      </main>
    </>
  );
};

export default Index;
