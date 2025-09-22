import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuickContact = (type: 'email' | 'phone') => {
    if (type === 'email') {
      window.location.href = 'mailto:sayanthcv25@gmail.com';
    } else {
      window.location.href = 'tel:+919497240667';
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Let's Create Together</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm excited to work on your project and learn from the experience. Let's discuss your vision and make it happen!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <button 
                  onClick={() => handleQuickContact('email')}
                  className="flex items-center gap-3 w-full text-left hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">sayanthcv@email.com</span>
                </button>
                <button 
                  onClick={() => handleQuickContact('phone')}
                  className="flex items-center gap-3 w-full text-left hover:bg-muted/50 p-2 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">+91 98765 43210</span>
                </button>
                <div className="flex items-center gap-3 p-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Kerala, India</span>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Mon - Fri, 9AM - 6PM IST</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Current Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Project Queue</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="text-sm text-muted-foreground">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Next Start Date</span>
                  <span className="text-sm text-muted-foreground">Jan 22, 2025</span>
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-4 sm:p-6 bg-primary/5 rounded-lg">
              <h4 className="text-base sm:text-lg mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Include your project details and timeline in your message for a faster response and better project understanding.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://www.instagram.com/__.sayn__?igsh=MWNyeHJ6dW94eGp1aA%3D%3D&utm_source=qr', '_blank')}
                className="w-full sm:w-auto"
              >
                View Examples
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <p className="text-muted-foreground">
                  Tell me about your video project and I'll get back to you with a custom quote.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("project", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial/Advertisement</SelectItem>
                          <SelectItem value="corporate">Corporate Video</SelectItem>
                          <SelectItem value="social">Social Media Content</SelectItem>
                          <SelectItem value="documentary">Documentary</SelectItem>
                          <SelectItem value="music">Music Video</SelectItem>
                          <SelectItem value="event">Event Coverage</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Under $500</SelectItem>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="over-5000">Over $5,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Rush Fee Applies)</SelectItem>
                            <SelectItem value="1-week">Within 1 Week</SelectItem>
                            <SelectItem value="2-weeks">Within 2 Weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="flexible">I'm Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project, including video length, style preferences, and any specific requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Project Details
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive project-related communications. 
                      I respect your privacy and will not share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}