import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle, Leaf, Beaker, Clock, Link } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const Results = () => {
  const [imageUrl, setImageUrl] = useState("/placeholder.svg");

  const location = useLocation();
  const newplantData = location.state?.analysis.analysis;
  // const uploadedFile = location.state?.uploadedFile.uploadedFile;

  // console.log(newplantData && newplantData);
  // console.log(uploadedFile && uploadedFile);

  useEffect(() => {
    // Only run once after the component mounts
    const savedImage = localStorage.getItem("uploadedFileUrl");
    if (savedImage) setImageUrl(savedImage);
  }, []);
  
  // Mock data for demonstration
  const plantData = {
    image: "/placeholder.svg", // This would be the uploaded image
    commonName: "Holy Basil",
    scientificName: "Ocimum tenuiflorum",
    ayurvedicName: "Tulsi",
    family: "Lamiaceae",
    confidence: 94,
    properties: ["Adaptogenic", "Antimicrobial", "Anti-inflammatory", "Antioxidant"],
    uses: [
      "Respiratory health and immunity",
      "Stress relief and mental clarity",
      "Digestive support",
      "Skin health and healing",
      "Cardiovascular wellness"
    ],
    sideEffects: [
      "May lower blood sugar levels",
      "Can affect blood clotting",
      "May interact with diabetes medications",
      "Not recommended during pregnancy"
    ],
    dosage: {
      tea: "1-2 cups daily of fresh leaf tea",
      powder: "1/4 to 1/2 teaspoon twice daily",
      extract: "Follow manufacturer's recommendations",
      fresh: "5-10 fresh leaves chewed daily"
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-gradient-accent text-accent-foreground">
              Analysis Complete
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Plant Identification Results
            </h1>
            <div className="flex items-center justify-center text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              {newplantData && newplantData.confidence}% Confidence Match
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Plant Image & Basic Info */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <img
                  src={imageUrl}
                  alt={newplantData && newplantData.commonName}
                  className="w-full h-64 object-cover rounded-lg shadow-card mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      {newplantData && newplantData.commonName}
                    </h2>
                    <p className="text-lg font-medium text-primary italic">
                      {newplantData && newplantData.scientificName}
                    </p>
                    <p className="text-muted-foreground">
                      Ayurvedic Name: {newplantData && newplantData.ayurvedicName}
                    </p>
                  </div>

                  <Separator />
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Family</p>
                    <p className="font-medium text-foreground">{newplantData && newplantData.family}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {newplantData && newplantData.properties.map((property, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {property}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Ayurvedic Uses */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Leaf className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Traditional Uses</h3>
                </div>
                
                <div className="grid gap-4">
                  {newplantData && newplantData.uses.map((use, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{use}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Dosage Information */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Beaker className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Dosage Guidelines</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tea</h4>
                      <p className="text-muted-foreground">{newplantData && newplantData.dosage.tea}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Powder</h4>
                      <p className="text-muted-foreground">{newplantData && newplantData.dosage.powder}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Extract</h4>
                      <p className="text-muted-foreground">{newplantData && newplantData.dosage.extract}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Fresh Leaves</h4>
                      <p className="text-muted-foreground">{newplantData && newplantData.dosage.fresh}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Side Effects & Precautions */}
              <Card className="p-8 border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Precautions & Side Effects</h3>
                </div>
                
                <div className="space-y-3">
                  {newplantData && newplantData.sideEffects.map((effect, index) => (
                    <div key={index} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{effect}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Always consult with a qualified Ayurvedic practitioner or healthcare provider before using medicinal plants.
                  </p>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                  <Link className="h-5 w-5 mr-2" />
                  Save to Dashboard
                </Button> */}
                <Button size="lg" variant="outline" onClick={() => window.history.back()}>
                  Analyze Another Plant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;