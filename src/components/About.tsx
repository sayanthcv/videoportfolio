import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Youtube, Heart, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const achievements = [
  {
    icon: BookOpen,
    title: "Self-Taught Journey",
    description: "2+ years of dedicated learning through online courses and YouTube tutorials"
  },
  {
    icon: Youtube,
    title: "YouTube University",
    description: "Completed 15+ comprehensive editing courses from top creators"
  },
  {
    icon: Heart,
    title: "Passion Project",
    description: "Turning my love for storytelling into a potential career path"
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Practicing daily to improve my skills and build a strong portfolio"
  }
];

const skills = [
  { name: "Adobe Premiere Pro", level: 70 },
  { name: "Basic Color Correction", level: 65 },
  { name: "Audio Syncing", level: 75 },
  { name: "Transitions & Effects", level: 60 },
  { name: "DaVinci Resolve", level: 50 },
  { name: "Story Structure", level: 80 },
  { name: "YouTube Editing", level: 85 },
  { name: "Social Media Content", level: 90 }
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">My Story</h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                Hi, I'm Sayanth C V, a self-taught video editor who discovered my passion for storytelling through visual media two years ago.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a hobby while watching YouTube tutorials has grown into a serious pursuit. I spend my free time learning new techniques, practicing with personal projects, and building my portfolio with every edit.
              </p>
              <p className="text-muted-foreground">
                While I may not have professional experience yet, I bring enthusiasm, dedication, and a fresh perspective to every project. I'm eager to turn my passion into professional opportunities and grow alongside my clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <achievement.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary mb-3" />
                    <h4 className="text-sm mb-2">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-first lg:order-last">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625961332600-f6eac385c6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTg1MjY5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional video editing workspace"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-zinc-900 border border-white/10 shadow-2xl rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl text-white">25+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Practiced</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">Current Skill Level</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}