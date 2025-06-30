
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, FileText, MessageSquare, Code, TrendingUp, Zap, Search, Bot, Settings, Users } from 'lucide-react';

const ToolsPreview = () => {
  const tools = [
    {
      icon: Globe,
      name: 'Web Scraper Pro',
      description: 'Extract structured data from any website with AI-powered parsing, anti-bot detection, and real-time monitoring capabilities.',
      credits: 5,
      category: 'Data Extraction',
      popular: true,
      features: ['Anti-bot protection', 'Real-time monitoring', 'Structured output']
    },
    {
      icon: FileText,
      name: 'Document Analyzer',
      description: 'Analyze PDFs, contracts, and documents for key insights, compliance checking, and automated data extraction.',
      credits: 3,
      category: 'Analysis',
      features: ['Multi-format support', 'Compliance checking', 'Key insight extraction']
    },
    {
      icon: MessageSquare,
      name: 'Content Generator',
      description: 'Generate high-quality content, blog posts, and marketing copy with advanced AI models and brand voice training.',
      credits: 2,
      category: 'Content',
      popular: true,
      features: ['Brand voice training', 'SEO optimization', 'Multi-language support']
    },
    {
      icon: Search,
      name: 'Market Research AI',
      description: 'Comprehensive market analysis, competitor research, and trend identification using advanced data mining techniques.',
      credits: 6,
      category: 'Research',
      features: ['Competitor analysis', 'Trend identification', 'Report generation']
    },
    {
      icon: Code,
      name: 'Code Assistant',
      description: 'AI-powered code generation, debugging, and optimization across multiple programming languages and frameworks.',
      credits: 4,
      category: 'Development',
      features: ['Multi-language support', 'Bug detection', 'Code optimization']
    },
    {
      icon: TrendingUp,
      name: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with automated reporting, predictive analytics, and visualization.',
      credits: 7,
      category: 'Analytics',
      popular: true,
      features: ['Predictive analytics', 'Auto reporting', 'Data visualization']
    },
    {
      icon: Bot,
      name: 'Chatbot Builder',
      description: 'Create intelligent chatbots with natural language processing, context awareness, and multi-platform deployment.',
      credits: 5,
      category: 'Automation',
      features: ['NLP processing', 'Multi-platform', 'Context awareness']
    },
    {
      icon: Settings,
      name: 'Workflow Automation',
      description: 'Automate complex business processes with AI-driven decision making, task scheduling, and integration capabilities.',
      credits: 4,
      category: 'Automation',
      features: ['Process automation', 'Smart scheduling', 'API integrations']
    },
    {
      icon: Users,
      name: 'Social Media Manager',
      description: 'Automate social media posting, engagement tracking, and content optimization across multiple platforms.',
      credits: 3,
      category: 'Marketing',
      features: ['Multi-platform posting', 'Engagement tracking', 'Content optimization']
    }
  ];

  const categories = ['All', 'Data Extraction', 'Analysis', 'Content', 'Research', 'Development', 'Analytics', 'Automation', 'Marketing'];

  return (
    <section id="tools" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional AI Tools for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to streamline your workflow, 
            boost productivity, and deliver exceptional results across all business functions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 group hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                    <tool.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  {tool.popular && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 font-medium">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                  {tool.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {tool.category}
                    </Badge>
                    <span className="text-sm font-medium text-gray-600">
                      {tool.credits} credits
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                  Try {tool.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom AI Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team can build custom AI tools tailored to your specific business needs. 
              From data processing to automation, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Custom Tool
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View All Tools
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
