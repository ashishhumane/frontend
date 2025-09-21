import { Leaf, Clock, Heart, Shield } from "lucide-react";
import aboutHerbs from "@/assets/about-herbs.jpg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aboutHerbs})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold text-white mb-6">
              About Ayurveda & Our Mission
            </h1>
            <p className="text-xl text-white/90">
              Bridging ancient Ayurvedic wisdom with modern technology to make plant-based healing accessible to everyone
            </p>
          </div>
        </div>
      </section>

      {/* Ayurveda History */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                The Ancient Science of Life
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ayurveda, originating over 5,000 years ago in India, is one of the world's oldest healing systems. 
                The word "Ayurveda" comes from Sanskrit, meaning "knowledge of life" or "science of longevity."
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This holistic approach focuses on maintaining health through the balance of mind, body, and spirit, 
                using natural remedies derived from plants, minerals, and lifestyle practices.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Clock className="h-5 w-5 mr-2" />
                Over 5,000 years of proven healing wisdom
              </div>
            </div>
            <div className="bg-gradient-accent p-8 rounded-2xl shadow-natural">
              <h3 className="text-2xl font-serif font-bold text-accent-foreground mb-4">
                Core Principles
              </h3>
              <ul className="space-y-4 text-accent-foreground">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Nature provides all necessary healing compounds</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Prevention is better than cure through lifestyle</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Individual constitution determines treatment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that ancient wisdom should be accessible to modern seekers. Our platform combines 
              AI-powered plant recognition with traditional Ayurvedic knowledge to help you discover 
              nature's healing potential safely and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Preserve Wisdom</h3>
              <p className="text-muted-foreground">Documenting and sharing traditional plant knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ensure Safety</h3>
              <p className="text-muted-foreground">Providing accurate dosage and safety information</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Promote Wellness</h3>
              <p className="text-muted-foreground">Supporting natural approaches to health and healing</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Bridge Eras</h3>
              <p className="text-muted-foreground">Connecting ancient wisdom with modern technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Begin Your Ayurvedic Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the healing power of plants with our AI-powered analysis
          </p>
          <a 
            href="/upload" 
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300"
          >
            Start Plant Analysis
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;