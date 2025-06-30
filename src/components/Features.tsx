
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Database, Zap, Shield, Clock, BarChart3, Users, Globe, Code, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'Advanced AI Models',
      description: 'Access the latest GPT-4, Claude, and specialized AI models for various tasks including text generation, analysis, and automation.'
    },
    {
      icon: Database,
      title: 'Smart Data Processing',
      description: 'Extract, transform, and analyze data from multiple sources with intelligent parsing and structured output generation.'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized infrastructure with global CDN ensures sub-second response times and 99.9% uptime guarantee.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption, GDPR compliance, and enterprise-grade data protection.'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process requests in real-time with instant results, batch processing, and scheduled automation capabilities.'
    },
    {
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Comprehensive dashboard with usage metrics, cost analysis, performance insights, and ROI tracking.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share tools across teams, manage user permissions, and collaborate on projects with role-based access control.'
    },
    {
      icon: Globe,
      title: 'API Integration',
      description: 'RESTful APIs and webhooks for seamless integration with your existing workflows and third-party applications.'
    },
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Build custom AI workflows with our no-code builder or integrate via our comprehensive developer SDK.'
    },
    {
      icon: Cpu,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling architecture that grows with your needs, from startup to enterprise-level processing volumes.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform provides all the tools, infrastructure, and support 
            you need to build, deploy, and scale AI-powered solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-blue-200">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already using AITools Pro to automate workflows, 
            generate insights, and accelerate growth with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No setup required</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
