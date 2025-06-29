
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, FileText, Image, MessageSquare, Code, TrendingUp } from 'lucide-react';

const ToolsPreview = () => {
  const tools = [
    {
      icon: Globe,
      name: 'Web Scraper Pro',
      description: 'Extract structured data from any website with AI-powered parsing and anti-bot detection.',
      credits: 5,
      category: 'Data Extraction',
      popular: true
    },
    {
      icon: FileText,
      name: 'Document Analyzer',
      description: 'Analyze PDFs, contracts, and documents for key insights, summaries, and data extraction.',
      credits: 3,
      category: 'Analysis'
    },
    {
      icon: MessageSquare,
      name: 'Content Generator',
      description: 'Generate high-quality content, blog posts, and marketing copy with advanced AI models.',
      credits: 2,
      category: 'Content'
    },
    {
      icon: Image,
      name: 'Image Recognition',
      description: 'Identify objects, text, and patterns in images with state-of-the-art computer vision.',
      credits: 4,
      category: 'Vision'
    },
    {
      icon: Code,
      name: 'API Integrator',
      description: 'Connect and automate workflows between different APIs and services seamlessly.',
      credits: 3,
      category: 'Integration'
    },
    {
      icon: TrendingUp,
      name: 'Market Analyzer',
      description: 'Analyze market trends, competitor data, and business intelligence from multiple sources.',
      credits: 6,
      category: 'Analytics',
      popular: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Tools at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of professional AI tools. Each tool is 
            optimized for performance and designed for business use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-200 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  {tool.popular && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-gray-900 mt-3">
                  {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {tool.category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {tool.credits} credits per use
                  </span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
