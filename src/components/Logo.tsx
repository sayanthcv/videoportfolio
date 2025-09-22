interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base", 
    lg: "w-14 h-14 text-lg"
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon with SC monogram */}
      <div className={`relative bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-2xl border border-gray-300/20 ${sizeClasses[size]}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl opacity-95"></div>
        
        {/* SC Letters */}
        <div className="relative flex items-center justify-center space-x-0.5">
          <span className="text-white font-bold tracking-tight">S</span>
          <span className="text-gray-300 font-bold tracking-tight">C</span>
        </div>
        
        {/* Accent elements */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60"></div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-semibold tracking-tight text-white ${textSizeClasses[size]}`}>
            Sayanth C V
          </span>
          <span className="text-xs text-gray-400 -mt-0.5">
            Video Editor
          </span>
        </div>
      )}
    </div>
  );
}