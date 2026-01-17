import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";

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
      className={`color-swatch ${bgClass} ${className} flex flex-col justify-end p-5 relative overflow-hidden group border border-border/30`}
    >
      <div className={`${textDark ? "text-foreground" : "text-white"} transition-all duration-200`}>
        <p className="font-semibold text-sm leading-tight">{name}</p>
        <p className={`text-[10px] font-medium ${textDark ? "text-foreground/60" : "text-white/70"}`}>
          {hex}
        </p>
      </div>
      
      {/* Copy indicator */}
      <div 
        className={`absolute top-3 right-3 p-1.5 rounded-full transition-all duration-200 ${
          copied 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
        } ${textDark ? "bg-foreground/10 text-foreground" : "bg-white/20 text-white"}`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </div>
    </div>
  );
};

export default ColorSwatch;
