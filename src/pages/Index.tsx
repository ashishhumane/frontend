import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Search, BookOpen, Users } from "lucide-react";
import heroPlants from "@/assets/hero-plants.jpg";

const Index = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax-element"
          style={{
            backgroundImage: `url(${heroPlants})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Discover the Power of
            <span className="block text-accent"> Ayurveda</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Upload plant images to unlock ancient wisdom and modern science
          </p>
          <Link to="/upload">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:shadow-glow text-lg px-8 py-4 animate-fade-in-up font-medium"
              style={{animationDelay: '0.4s'}}
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Plant Image
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Ancient Wisdom, Modern Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Harness the power of AI to identify medicinal plants and discover their traditional Ayurvedic uses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-natural transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">AI Plant Recognition</h3>
              <p className="text-muted-foreground">
                Advanced image analysis to identify medicinal plants with scientific accuracy
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-natural transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ayurvedic Knowledge</h3>
              <p className="text-muted-foreground">
                Comprehensive database of traditional uses, benefits, and preparation methods
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-natural transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Dosage recommendations and safety information from Ayurvedic practitioners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Explore Nature's Pharmacy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands discovering the healing power of plants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upload">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start Analyzing
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;