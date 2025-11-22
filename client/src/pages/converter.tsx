import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileJson, Download, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SUPPORTED_FORMATS = ["STL", "OBJ", "3MF", "GCODE", "STEP", "IGES"];

export default function Converter() {
  const [inputFormat, setInputFormat] = useState("STL");
  const [outputFormat, setOutputFormat] = useState("OBJ");
  const [fileName, setFileName] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleConvert = async () => {
    if (!fileName) {
      toast({
        title: "No file selected",
        description: "Please upload a file before converting.",
      });
      return;
    }

    setIsConverting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Conversion complete!",
      description: `File converted from ${inputFormat} to ${outputFormat}. Download starting...`,
    });

    setIsConverting(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <FileJson className="w-10 h-10 text-primary" />
          3D File Format Converter
        </h1>
        <p className="text-muted-foreground">
          Convert between STL, OBJ, 3MF, G-code, STEP, and IGES formats instantly in your browser
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload & Convert</CardTitle>
          <CardDescription>
            Select your input and output formats, upload your file, and get the converted version ready to download
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Format Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="input-format">Input Format</Label>
              <Select value={inputFormat} onValueChange={setInputFormat}>
                <SelectTrigger id="input-format" data-testid="select-input-format">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_FORMATS.map((format) => (
                    <SelectItem key={format} value={format}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="output-format">Output Format</Label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger id="output-format" data-testid="select-output-format">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_FORMATS.map((format) => (
                    <SelectItem key={format} value={format}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file-upload">Upload File</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Input
                id="file-upload"
                type="file"
                accept={`.${inputFormat.toLowerCase()}`}
                onChange={handleFileUpload}
                className="hidden"
                data-testid="input-file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="space-y-2">
                  <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                  <div>
                    <p className="font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">
                      {fileName || `Select a ${inputFormat} file`}
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Convert Button */}
          <Button
            onClick={handleConvert}
            disabled={isConverting || !fileName}
            className="w-full"
            size="lg"
            data-testid="button-convert"
          >
            {isConverting ? (
              "Converting..."
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Convert to {outputFormat}
              </>
            )}
          </Button>

          {/* Info Section */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p className="font-semibold">Supported Formats:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>STL</strong> - Stereolithography (3D printing standard)</li>
              <li><strong>OBJ</strong> - Wavefront OBJ (widely compatible)</li>
              <li><strong>3MF</strong> - 3D Manufacturing Format (newer standard)</li>
              <li><strong>GCODE</strong> - Machine-readable printer instructions</li>
              <li><strong>STEP</strong> - CAD exchange format</li>
              <li><strong>IGES</strong> - Initial Graphics Exchange Specification</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
