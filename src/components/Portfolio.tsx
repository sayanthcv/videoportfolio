import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, ExternalLink, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    id: 1,
    title: "Instagram Reels Editing",
    description: "Learning to create engaging vertical content with trending transitions, quick cuts, and music synchronization for social media.",
    thumbnail: "https://images.unsplash.com/photo-1722843143890-73c002dd06a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjByZWVscyUyMHZlcnRpY2FsJTIwdmlkZW98ZW58MXx8fHwxNzU4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "0:30",
    tags: ["Instagram", "Reels", "Vertical"],
    category: "Social Media"
  },
  {
    id: 2,
    title: "YouTube Video Editing",
    description: "Practicing long-form content editing with intro/outros, lower thirds, and maintaining viewer engagement throughout.",
    thumbnail: "https://images.unsplash.com/photo-1627244714766-94dab62ed964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBlZGl0aW5nfGVufDF8fHx8MTc1ODQ0MTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:15",
    tags: ["YouTube", "Long-form", "Graphics"],
    category: "Content Creation"
  },
  {
    id: 3,
    title: "Color Grading Practice",
    description: "Experimenting with color correction and grading techniques to enhance mood and visual storytelling in different scenarios.",
    thumbnail: "https://images.unsplash.com/photo-1682506456442-a051e8dae813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjB2aWRlb3xlbnwxfHx8fDE3NTgzNzQ4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "2:45",
    tags: ["Color Grading", "Mood", "Cinematic"],
    category: "Post-Production"
  },
  {
    id: 4,
    title: "After Movie Editing",
    description: "Creating event highlight reels and after movies, learning to compress hours of footage into compelling stories.",
    thumbnail: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTg0NDExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:30",
    tags: ["Events", "Highlights", "Storytelling"],
    category: "Event"
  },
  {
    id: 5,
    title: "Music Video Editing",
    description: "Synchronizing video cuts with music beats, experimenting with rhythm-based editing and creative visual effects.",
    thumbnail: "https://images.unsplash.com/photo-1576267345152-5e8d10f75cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwZWRpdGluZ3xlbnwxfHx8fDE3NTg0NDExNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:20",
    tags: ["Music Video", "Beat Sync", "Effects"],
    category: "Music"
  },
  {
    id: 6,
    title: "Travel Vlog Editing",
    description: "Learning travel videography editing with location changes, time-lapse integration, and narrative structure.",
    thumbnail: "https://images.unsplash.com/photo-1758272422525-924dc4f782a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2bG9nJTIwdmlkZW98ZW58MXx8fHwxNzU4NDQxMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "6:00",
    tags: ["Travel", "Vlog", "Narrative"],
    category: "Lifestyle"
  }
];

export function Portfolio() {
  const handleItemClick = (item: typeof portfolioItems[0]) => {
    // Open Instagram profile to view actual projects
    window.open('https://www.instagram.com/__.sayn__?igsh=MWNyeHJ6dW94eGp1aA%3D%3D&utm_source=qr', '_blank');
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">My Learning Journey</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Different types of video editing I've been practicing and mastering through personal projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30">
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                </div>
                
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <Badge variant="secondary" className="bg-black/50 text-white border-0 text-xs">
                    {item.category}
                  </Badge>
                </div>
                
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
                  <div className="bg-black/50 text-white px-1.5 sm:px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="hidden sm:inline">{item.duration}</span>
                    <span className="sm:hidden">{item.duration.split(':')[0]}m</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group w-full sm:w-auto"
            onClick={() => window.open('https://www.instagram.com/__.sayn__?igsh=MWNyeHJ6dW94eGp1aA%3D%3D&utm_source=qr', '_blank')}
          >
            See More Practice Work
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}