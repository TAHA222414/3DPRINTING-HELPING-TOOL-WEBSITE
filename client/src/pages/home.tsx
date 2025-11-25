import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileJson, Clock, Wrench, BookOpen, Play } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const tools = [
    {
      title: "Filament Calculator",
      description: "Calculate filament length, weight, volume, and cost for your 3D prints",
      icon: Calculator,
      href: "/tools",
      color: "bg-blue-500/10",
    },
    {
      title: "File Format Converter",
      description: "Convert between STL, OBJ, 3MF, G-code, and more formats instantly",
      icon: FileJson,
      href: "/converter",
      color: "bg-purple-500/10",
    },
    {
      title: "Print Time Estimator",
      description: "Estimate print duration based on layer height, speed, and infill",
      icon: Clock,
      href: "/time-estimator",
      color: "bg-orange-500/10",
    },
    {
      title: "Calibration Guide",
      description: "Interactive printer calibration assistant with custom G-code generation",
      icon: Wrench,
      href: "/calibration",
      color: "bg-green-500/10",
    },
  ];

  const blogs = [
    {
      title: "Getting Started with 3D Printing",
      excerpt: "Learn the basics of 3D printing, from choosing a printer to your first successful print.",
      date: "November 15, 2024",
      category: "Beginner",
      href: "/getting-started",
    },
    {
      title: "Advanced Filament Types Explained",
      excerpt: "Deep dive into different filament materials, their properties, and best use cases.",
      date: "November 10, 2024",
      category: "Materials",
      href: "/filament-types",
    },
    {
      title: "Troubleshooting Common Print Issues",
      excerpt: "Solutions for warping, layer adhesion, and other common 3D printing problems.",
      date: "November 5, 2024",
      category: "Troubleshooting",
      href: "/troubleshooting",
    },
    {
      title: "Optimizing Print Quality",
      excerpt: "Tips and tricks to achieve professional-quality prints with perfect surface finishes.",
      date: "October 30, 2024",
      category: "Tips",
      href: "/print-quality",
    },
  ];

  const videos = [
    {
      title: "Complete 3D Printer Setup Guide",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      title: "Understanding Infill and Density",
      videoId: "jNgzyQgcQFU",
      thumbnail: "https://img.youtube.com/vi/jNgzyQgcQFU/maxresdefault.jpg",
    },
    {
      title: "Filament Storage Best Practices",
      videoId: "9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold">3D Printing Tools Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources for 3D printing enthusiasts and professionals. Calculate, convert, estimate, and calibrate all in one place.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Tools</h2>
          <p className="text-muted-foreground">Everything you need for successful 3D printing</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.href} href={tool.href}>
                <Card className="h-full hover-elevate cursor-pointer transition-all">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{tool.description}</CardDescription>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <span className="flex items-center gap-2">
                        Use Tool <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground">Learn from our comprehensive guides and tutorials</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.href} href={blog.href}>
              <Card className="h-full hover-elevate cursor-pointer flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                  </div>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* YouTube Carousel Section */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Play className="w-8 h-8" />
            Featured Videos
          </h2>
          <p className="text-muted-foreground">Watch tutorials and tips from our community</p>
        </div>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center relative">
            <img
              src={videos[currentVideoIndex].thumbnail}
              alt={videos[currentVideoIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <a
                href={`https://www.youtube.com/watch?v=${videos[currentVideoIndex].videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover-elevate"
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </a>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{videos[currentVideoIndex].title}</h3>

            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={prevVideo}
                data-testid="button-prev-video"
              >
                ← Previous
              </Button>

              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentVideoIndex ? "bg-primary w-8" : "bg-muted"
                    }`}
                    data-testid={`button-video-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextVideo}
                data-testid="button-next-video"
              >
                Next →
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Video {currentVideoIndex + 1} of {videos.length}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
