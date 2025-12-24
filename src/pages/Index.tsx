import ColorSwatch from "@/components/ColorSwatch";

const Index = () => {
  return (
    <>
      <head>
        <title>Color Cheat Sheet</title>
        <meta name="description" content="A beautiful color palette reference featuring Twilight, Pumice, and accent colors. Click to copy hex codes." />
      </head>
      
      <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Grid Layout matching the reference */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in">
            
            {/* Row 1 */}
            <ColorSwatch
              name="Twilight 100"
              hex="#E8E5F7"
              bgClass="bg-twilight-100"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Twilight 200"
              hex="#D0CAF0"
              bgClass="bg-twilight-200"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Twilight 300"
              hex="#BDBBF5"
              bgClass="bg-twilight-300"
              textDark={true}
              className="min-h-[280px] md:min-h-[380px] row-span-2"
            />
            <ColorSwatch
              name="Twilight 800"
              hex="#211ADB"
              bgClass="bg-twilight-800"
              textDark={false}
              className="min-h-[140px] md:min-h-[180px]"
            />

            {/* Row 2 */}
            <ColorSwatch
              name="Pumice 100"
              hex="#FFFEFC"
              bgClass="bg-pumice-100"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Pumice 200"
              hex="#FCF9F2"
              bgClass="bg-pumice-200"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Twilight 900"
              hex="#211ADB"
              bgClass="bg-twilight-900"
              textDark={false}
              className="min-h-[140px] md:min-h-[180px]"
            />

            {/* Row 3 */}
            <ColorSwatch
              name="Moss 100"
              hex="#E7FE96"
              bgClass="bg-moss-100"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Lavender 100"
              hex="#B8A4E6"
              bgClass="bg-lavender-100"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
            <ColorSwatch
              name="Pumice 300"
              hex="#F7F0DF"
              bgClass="bg-pumice-300"
              textDark={true}
              className="min-h-[280px] md:min-h-[380px] row-span-2"
            />
            <ColorSwatch
              name="Pumice 400"
              hex="#EEE0BE"
              bgClass="bg-pumice-400"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />

            {/* Row 4 - Empty cells handled by row-span-2 above */}
            <div className="col-span-2"></div>
            <ColorSwatch
              name="Moonlight 100"
              hex="#81B2EB"
              bgClass="bg-moonlight-100"
              textDark={true}
              className="min-h-[140px] md:min-h-[180px]"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
