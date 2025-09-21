import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send, MessageCircle, Leaf } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import contactGarden from "@/assets/contact-garden.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (would need backend integration)
    console.log("Contact form submission:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactGarden})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-natural">
              <MessageCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions about Ayurvedic plants or need guidance? We're here to help you on your herbal journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Contact Cards */}
              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-sm text-muted-foreground">We're here to help</p>
                  </div>
                </div>
                <p className="text-muted-foreground">info@ayurveda-plants.com</p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>

              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">Ayurvedic Center</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  123 Herbal Garden Way<br />
                  Wellness District<br />
                  Nature City, NC 12345
                </p>
              </Card>

              {/* Consultation Note */}
              <Card className="p-6 bg-gradient-accent text-accent-foreground">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 mr-3" />
                  <h3 className="font-semibold">Expert Consultation</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Schedule a consultation with our certified Ayurvedic practitioners for personalized plant recommendations.
                </p>
                <Button variant="secondary" size="sm" className="text-accent-foreground">
                  Book Consultation
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-card">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or how we can help..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Separator />

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      * Required fields
                    </p>
                    <Button 
                      type="submit" 
                      className="bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Note about functionality */}
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-accent-foreground text-center">
                  🌿 Note: Contact form requires backend integration to send actual messages
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about our plant analysis service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  How accurate is the plant identification?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our AI-powered system achieves over 90% accuracy when identifying common medicinal plants. 
                  We recommend consulting with practitioners for final verification.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Is the dosage information safe to follow?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our dosage recommendations are based on traditional Ayurvedic texts and should be used 
                  as general guidance. Always consult healthcare providers before using medicinal plants.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Can I save my plant analysis results?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Create an account to save your analysis history, bookmark favorite plants, 
                  and track your learning progress over time.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Do you offer consultation services?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We partner with certified Ayurvedic practitioners who can provide personalized 
                  consultations and treatment plans based on your specific needs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;