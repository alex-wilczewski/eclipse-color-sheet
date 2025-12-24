import { useState } from "react";
import { toast } from "sonner";

interface ColorSwatchProps {
  name: string;
  hex: string;
  bgClass: string;
  textDark?: boolean;
  className?: string;
}

const ColorSwatch = ({ name, hex, bgClass, textDark = false, className = "" }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      toast.success(`Copied ${hex} to clipboard!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div
      onClick={handleCopy}
      className={`color-swatch ${bgClass} ${className} flex flex-col justify-end p-5 min-h-[140px] relative overflow-hidden group`}
    >
      <div className={`${textDark ? "text-plum-900" : "text-cream-100"} transition-all duration-200`}>
        <p className="font-semibold text-sm leading-tight">{name}</p>
        <p className={`text-sm font-medium ${textDark ? "text-plum-900/70" : "text-cream-100/70"}`}>
          {hex}
        </p>
      </div>
      
      {/* Copy indicator */}
      <div 
        className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full transition-all duration-200 ${
          copied 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
        } ${textDark ? "bg-plum-900/10 text-plum-900" : "bg-cream-100/20 text-cream-100"}`}
      >
        {copied ? "Copied!" : "Click to copy"}
      </div>
    </div>
  );
};

export default ColorSwatch;
