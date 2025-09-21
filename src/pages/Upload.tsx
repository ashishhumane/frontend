import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload as UploadIcon, Image, X, Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast({
        title: "Image uploaded successfully",
        description: "Ready for analysis",
      });
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl("");
    URL.revokeObjectURL(previewUrl);
  };

  const handleAnalyze = () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    toast({
      title: "Analyzing plant...",
      description: "This may take a few moments",
    });

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/results");
    }, 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Upload Plant Image
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload a clear image of the plant you want to identify and analyze
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Camera className="h-6 w-6 mr-2 text-primary" />
                Select Image
              </h2>
              
              {!uploadedFile ? (
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragActive 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <input {...getInputProps()} />
                  <UploadIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-lg text-primary">Drop the image here...</p>
                  ) : (
                    <>
                      <p className="text-lg text-foreground mb-2">
                        Drag & drop an image here, or click to select
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports JPG, PNG, WebP (max 10MB)
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Uploaded plant"
                      className="w-full h-64 object-cover rounded-lg shadow-card"
                    />
                    <Button
                      onClick={removeFile}
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Analysis Panel */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Image className="h-6 w-6 mr-2 text-accent" />
                Analysis
              </h2>
              
              {!uploadedFile ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Upload an image to begin analysis
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gradient-accent p-6 rounded-lg text-accent-foreground">
                    <h3 className="font-semibold mb-2">Image Quality Check</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Resolution: Good
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Lighting: Adequate
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Focus: Sharp
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Analysis Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Plant identification</li>
                      <li>• Scientific classification</li>
                      <li>• Ayurvedic properties</li>
                      <li>• Traditional uses</li>
                      <li>• Safety information</li>
                      <li>• Dosage recommendations</li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <UploadIcon className="h-5 w-5 mr-2" />
                        Analyze Plant
                      </>
                    )}
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="mt-8 p-8 bg-gradient-secondary">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tips for Best Results
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Image Quality</h4>
                <ul className="space-y-1">
                  <li>• Use good lighting (natural light preferred)</li>
                  <li>• Ensure the plant is in focus</li>
                  <li>• Capture the whole plant when possible</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">What to Include</h4>
                <ul className="space-y-1">
                  <li>• Leaves, flowers, and stems</li>
                  <li>• Close-up details of unique features</li>
                  <li>• Multiple angles if available</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;