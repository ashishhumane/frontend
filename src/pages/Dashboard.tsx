import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Leaf, Search, TrendingUp, Clock, Eye } from "lucide-react";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Dr. Priya Sharma",
    joinDate: "March 2024",
    analysisCount: 23,
    favoriteCount: 8
  };

  // Mock recent analysis data
  const recentAnalysis = [
    {
      id: 1,
      plantName: "Holy Basil (Tulsi)",
      scientificName: "Ocimum tenuiflorum",
      date: "2024-01-15",
      confidence: 94,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      plantName: "Neem",
      scientificName: "Azadirachta indica",
      date: "2024-01-12",
      confidence: 89,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      plantName: "Turmeric",
      scientificName: "Curcuma longa",
      date: "2024-01-10",
      confidence: 97,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                  Welcome back, {user.name}
                </h1>
                <p className="text-muted-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Member since {user.joinDate}
                </p>
              </div>
              <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                <Search className="h-4 w-4 mr-2" />
                New Analysis
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{user.analysisCount}</h3>
                <p className="text-muted-foreground">Total Analyses</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{user.favoriteCount}</h3>
                <p className="text-muted-foreground">Saved Plants</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">92%</h3>
                <p className="text-muted-foreground">Avg. Confidence</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">3</h3>
                <p className="text-muted-foreground">This Week</p>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Recent Analysis */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-foreground">Recent Analysis</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-6">
                  {recentAnalysis.map((analysis) => (
                    <div key={analysis.id}>
                      <div className="flex items-center space-x-4">
                        <img
                          src={analysis.image}
                          alt={analysis.plantName}
                          className="w-16 h-16 rounded-lg object-cover shadow-card"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{analysis.plantName}</h3>
                          <p className="text-sm italic text-muted-foreground">{analysis.scientificName}</p>
                          <div className="flex items-center mt-2 space-x-4">
                            <Badge variant="secondary" className="text-xs">
                              {analysis.confidence}% match
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(analysis.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      {analysis.id !== recentAnalysis[recentAnalysis.length - 1].id && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Quick Actions & Profile */}
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    New Plant Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Leaf className="h-4 w-4 mr-2" />
                    Browse Saved Plants
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Analysis History
                  </Button>
                </div>
              </Card>

              {/* Learning Resources */}
              <Card className="p-6 bg-gradient-accent text-accent-foreground">
                <h3 className="text-xl font-semibold mb-4">Ayurvedic Wisdom</h3>
                <p className="text-sm mb-4 opacity-90">
                  "In Ayurveda, every plant has a purpose, and every purpose has a plant."
                </p>
                <Button variant="secondary" size="sm" className="text-accent-foreground">
                  Daily Learning
                </Button>
              </Card>

              {/* Achievements */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Plant Explorer</p>
                      <p className="text-xs text-muted-foreground">Analyzed 20+ plants</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Search className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Accuracy Expert</p>
                      <p className="text-xs text-muted-foreground">90%+ average confidence</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Note about backend */}
          <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-accent-foreground text-center">
              🌿 Note: User dashboard features require Supabase integration for persistent data storage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;