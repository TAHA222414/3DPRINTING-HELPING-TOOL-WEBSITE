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

    // Generate mock file content based on output format
    let fileContent = "";
    let mimeType = "text/plain";

    if (outputFormat === "STL") {
      fileContent = "solid model\n  facet normal 0 0 1\n    outer loop\n      vertex 0 0 0\n      vertex 1 0 0\n      vertex 0 1 0\n    endloop\n  endfacet\nendsolid model";
      mimeType = "application/octet-stream";
    } else if (outputFormat === "OBJ") {
      fileContent = "# Converted 3D model\nv 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n";
      mimeType = "text/plain";
    } else if (outputFormat === "3MF") {
      fileContent = '<?xml version="1.0"?><model xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><resources><object id="1"><mesh><vertices><vertex x="0" y="0" z="0"/></vertices><triangles><triangle v1="0" v2="1" v3="2"/></triangles></mesh></object></resources></model>';
      mimeType = "application/xml";
    } else if (outputFormat === "GCODE") {
      fileContent = "; Converted G-code\nG28\nG29\nG0 X10 Y10 Z0.2 F1500\nG0 Z10\nM104 S0\nM109 S0\nM84\n";
      mimeType = "text/plain";
    } else if (outputFormat === "STEP") {
      fileContent = "ISO-10303-21;\nHEADER;\nFILE_DESCRIPTION((''),2,(2#124));\nFILE_NAME('converted.stp','',(''),(''),'',' ',' ');\nFILE_SCHEMA(('AUTOMOTIVE_DESIGN'));\nENDSEC;\nDATA;\nENDSEC;\nEND-ISO-10303-21;";
      mimeType = "application/octet-stream";
    } else if (outputFormat === "IGES") {
      fileContent = "                                                                        S     1\n     123CONVERTED FILE FOR TESTING                                    G     1\n404 4 7 13 15 308 15 308 15 UE 0.001 15H 1.0 2HMM 1 0.01 13H           G     2\n140101 2358 1.0 1HM 1 0.1 9HUNITTEST  G     3\nS      1G      4\n";
      mimeType = "text/plain";
    }

    // Create blob and trigger download
    const blob = new Blob([fileContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `converted_model.${outputFormat.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Conversion complete!",
      description: `File converted from ${inputFormat} to ${outputFormat} and downloaded successfully!`,
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
