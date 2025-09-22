import { Button } from "./ui/button";
import { Play, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20">
                <Play className="w-4 h-4 mr-2" />
                Self-Taught Video Editor
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Sayanth C V</span><br />
                Turning Ideas Into Engaging Videos
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Passionate about storytelling through video, I'm building my portfolio with creative projects while learning the latest editing techniques. Let's create something amazing together!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-white">25+</div>
                <div className="text-xs sm:text-sm text-gray-400">Practice Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-white">2+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Passion Driven</div>
              </div>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4MjI1MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Video editing workspace"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <div className="text-xs sm:text-sm opacity-90">Latest project</div>
                <div className="text-sm sm:text-base">Travel Vlog Edit</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-zinc-900 border border-white/10 shadow-2xl rounded-lg p-3 sm:p-4 max-w-[160px] sm:max-w-xs">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white">Best Project</div>
                  <div className="text-xs text-gray-400">15K+ Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}