
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Database, Zap, Shield, Clock, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Tools',
      description: 'Access cutting-edge AI models for text generation, data analysis, and automation tasks.'
    },
    {
      icon: Database,
      title: 'Data Extraction',
      description: 'Extract structured data from websites, documents, and APIs with intelligent parsing.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized infrastructure ensures rapid processing and real-time results for all tools.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, compliance, and privacy protection built-in.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Reliable uptime with global CDN and redundant systems for uninterrupted access.'
    },
    {
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Detailed insights into your tool usage, costs, and performance metrics.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AITools Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade AI tools designed for businesses that demand reliability, 
            performance, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
