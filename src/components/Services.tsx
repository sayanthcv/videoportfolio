import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Video, 
  Palette, 
  Music, 
  Sparkles, 
  Clock, 
  Users,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing & Cutting",
    description: "Basic to intermediate video editing with clean cuts, smooth transitions, and engaging pacing.",
    features: ["Timeline editing", "Cut & trim clips", "Smooth transitions", "Pacing optimization"],
    popular: false
  },
  {
    icon: Palette,
    title: "Color Correction & Grading",
    description: "Enhance your footage with color correction and basic grading to improve visual appeal.",
    features: ["Color correction", "Brightness/contrast", "Saturation adjustments", "Mood enhancement"],
    popular: false
  },
  {
    icon: Sparkles,
    title: "Social Media Content",
    description: "Short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts.",
    features: ["Vertical format editing", "Trending effects", "Quick cuts", "Music synchronization"],
    popular: true
  },
  {
    icon: Music,
    title: "Audio Sync & Enhancement",
    description: "Clean audio editing to ensure your video sounds as good as it looks.",
    features: ["Audio synchronization", "Basic noise reduction", "Volume balancing", "Music integration"],
    popular: false
  }
];

const packages = [
  {
    name: "Basic Edit",
    description: "Simple cuts and basic enhancements",
    features: [
      "Basic cutting and trimming",
      "Simple transitions",
      "Audio sync",
      "Color correction",
      "HD 1080p export"
    ]
  },
  {
    name: "Standard Edit",
    description: "Enhanced editing with graphics and effects",
    features: [
      "Advanced cutting techniques",
      "Creative transitions",
      "Text overlays and titles",
      "Color grading",
      "Background music integration",
      "Multiple format exports"
    ],
    popular: true
  },
  {
    name: "Premium Edit",
    description: "Full post-production with custom elements",
    features: [
      "Complex multi-track editing",
      "Custom graphics and animations",
      "Advanced color grading",
      "Professional audio mixing",
      "Custom effects and filters",
      "4K export with source files"
    ]
  }
];

export function Services() {
  const handleServiceClick = (service: typeof services[0]) => {
    // Scroll to contact section for inquiries
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePackageClick = (pkg: typeof packages[0]) => {
    // Scroll to contact section for package inquiries
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Services Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">What I Can Do For You</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Video editing services I offer while building my portfolio and gaining experience
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${service.popular ? 'ring-2 ring-primary/20' : ''}`}
              onClick={() => handleServiceClick(service)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <service.icon className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full group">
                    <span className="text-sm">Let's Talk</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Options */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">Service Packages</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the level of editing that fits your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${pkg.popular ? 'ring-2 ring-primary/20 md:scale-105' : ''}`}
                onClick={() => handlePackageClick(pkg)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-xs">Most Requested</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg sm:text-xl">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button 
                      className="w-full"
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      Discuss Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t">
          <div className="text-center">
            <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-4" />
            <h4 className="text-base sm:text-lg mb-2">Flexible Timeline</h4>
            <p className="text-muted-foreground text-sm">Working around your schedule while delivering quality results</p>
          </div>
          <div className="text-center">
            <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-4" />
            <h4 className="text-base sm:text-lg mb-2">Collaborative Process</h4>
            <p className="text-muted-foreground text-sm">Regular updates and feedback sessions throughout the project</p>
          </div>
          <div className="text-center">
            <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-primary mx-auto mb-4" />
            <h4 className="text-base sm:text-lg mb-2">Passionate Approach</h4>
            <p className="text-muted-foreground text-sm">Bringing enthusiasm and fresh perspective to every project</p>
          </div>
        </div>
      </div>
    </section>
  );
}