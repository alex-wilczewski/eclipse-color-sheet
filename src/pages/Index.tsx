import ColorSwatch from "@/components/ColorSwatch";

const colors = {
  hero: { name: "Lime 400", hex: "#E3FF9C", bgClass: "bg-lime-400", textDark: true },
  plum: [
    { name: "Plum 100", hex: "#FAE7FF", bgClass: "bg-plum-100", textDark: true },
    { name: "Plum 200", hex: "#F7CEFF", bgClass: "bg-plum-200", textDark: true },
    { name: "Plum 300", hex: "#F29EFF", bgClass: "bg-plum-300", textDark: true },
    { name: "Plum 800", hex: "#8C1593", bgClass: "bg-plum-800", textDark: false },
    { name: "Plum 900", hex: "#190A26", bgClass: "bg-plum-900", textDark: false },
  ],
  cream: [
    { name: "Cream 100", hex: "#FFFEFC", bgClass: "bg-cream-100", textDark: true },
    { name: "Cream 200", hex: "#FCF9F2", bgClass: "bg-cream-200", textDark: true },
    { name: "Cream 300", hex: "#F7F0DF", bgClass: "bg-cream-300", textDark: true },
    { name: "Cream 400", hex: "#EEE0BE", bgClass: "bg-cream-400", textDark: true },
  ],
  accents: [
    { name: "Mint", hex: "#7CFFA9", bgClass: "bg-mint", textDark: true },
    { name: "Zest", hex: "#D7FF00", bgClass: "bg-zest", textDark: true },
    { name: "Peach 300", hex: "#FFAE9E", bgClass: "bg-peach-300", textDark: true },
    { name: "Blueberry", hex: "#211ADB", bgClass: "bg-blueberry", textDark: false },
    { name: "Jam", hex: "#4510CC", bgClass: "bg-jam", textDark: false },
  ],
};

const Index = () => {
  return (
    <>
      <head>
        <title>Plum Color Cheat Sheet</title>
        <meta name="description" content="A beautiful color palette reference featuring Plum, Cream, and vibrant accent colors. Click to copy hex codes." />
      </head>
      
      <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-3">
          {/* Hero - Lime 400 */}
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <ColorSwatch
              {...colors.hero}
              className="min-h-[120px] md:min-h-[140px]"
            />
          </div>

          {/* Plum Row */}
          <div 
            className="grid grid-cols-2 md:grid-cols-5 gap-3 animate-fade-in" 
            style={{ animationDelay: "100ms" }}
          >
            {colors.plum.map((color, index) => (
              <ColorSwatch
                key={color.name}
                {...color}
                className="min-h-[160px] md:min-h-[200px]"
              />
            ))}
          </div>

          {/* Cream Row */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in" 
            style={{ animationDelay: "200ms" }}
          >
            {colors.cream.map((color) => (
              <ColorSwatch
                key={color.name}
                {...color}
                className="min-h-[160px] md:min-h-[200px]"
              />
            ))}
          </div>

          {/* Accent Colors Row */}
          <div 
            className="grid grid-cols-2 md:grid-cols-5 gap-3 animate-fade-in" 
            style={{ animationDelay: "300ms" }}
          >
            {colors.accents.map((color) => (
              <ColorSwatch
                key={color.name}
                {...color}
                className="min-h-[120px] md:min-h-[140px]"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
