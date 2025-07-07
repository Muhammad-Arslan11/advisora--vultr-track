 "use client";
import React from 'react';
import { 
  Brain, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Lightbulb, 
  Target, 
  CheckCircle,
  Sparkles,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Building,
  UserCheck
} from 'lucide-react';
import Image from 'next/image';
import './home-view.css'
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (

<section className="section"> <h2 className="section-title">{title}</h2> <div className="section-content">{children}</div> </section> );
export const Homeview = () => {

return (
 <div className="min-h-screen bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Hero */}
          <section className="hero py-20 text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Democratizing AI-Powered Consulting</span>
            </div>
            
            <h1 className="hero-title text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Bring AI to Your
              </span>
              <br />
              <span className="text-white">Consulting Practice</span>
            </h1>
            
            <p className="hero-subtitle text-xl lg:text-2xl  text-white max-w-4xl mx-auto leading-relaxed">
              Advisora.io lets you create AI agents trained on your firm's knowledge—scaling elite advice for SMBs everywhere.
            </p>
          </section>

          <Section title="What is Advisora.io?">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-lg leading-relaxed  text-white">
                Advisora.io is a platform where consulting firms and independent consultants can create, train, and deploy their own AI-powered consulting agents. These agents reflect each firm's knowledge base, methodology, and tone—making consulting scalable and accessible.
              </p>
            </div>
          </Section>

          <Section title="💡 The Problem It Solves">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Limited Consultant Bandwidth</h3>
                <p className=" text-white">Demand exceeds expert availability.</p>
              </div>
              <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Unscalable Delivery</h3>
                <p className=" text-white">1:1 expert consulting can't scale affordably.</p>
              </div>
              <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">High Barriers for SMBs</h3>
                <p className=" text-white">Most can't afford high-end consulting.</p>
              </div>
            </div>
          </Section>

          <Section title="🚀 The Solution: Advisora.io">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Interact with clients via AI</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <Zap className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Provide real-time strategic advice</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Analyze data, summarize calls, and deliver outputs</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Output SWOT, roadmaps, financial advice, GTM plans</h3>
              </div>
            </div>
          </Section>

          <Section title="🧠 Key Features">
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Agent Customization</h3>
                  <p className=" text-white">Train agents via prompt-like instructions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <MessageSquare className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Meeting Automation</h3>
                  <p className=" text-white">Auto summaries, transcripts, and insights</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <BarChart3 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Post-Call Analysis</h3>
                  <p className=" text-white">Built-in SWOT, PESTEL, GTM frameworks</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Users className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">SMB Access</h3>
                  <p className=" text-white">Lower consulting costs dramatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Future Roadmap</h3>
                  <p className="text-white">Fine-tuning of LLM, specifically for AI-Powered Consulting; Creating own LLM Model</p>
              </div>
            </div>
            </div>
          </Section>

          <Section title="🌍 Target Audience">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Building className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-sm  text-white font-medium">Consulting Firms</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <UserCheck className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <span className="text-sm  text-white font-medium">Freelance Advisors</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Lightbulb className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <span className="text-sm  text-white font-medium">Startup Accelerators</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <span className="text-sm  text-white font-medium">B2B SaaS Providers</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-white  font-medium">SMB Clients</span>
              </div>
            
          </Section>

          <Section title="📦 Current Status">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className=' text-white'>MVP ready with React + Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className=' text-white'>Postgres via Neon</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className=' text-white'>OpenAI API</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className=' text-white' >Currently training our own LLM</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className=' text-white'>In-house LLM in development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className=' text-white'>Beta in Azerbaijan, Kazakhstan, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className=' text-white'>Enterprise & API infra in progress</span>
                </div>
              </div>
            </div>
          </Section>

          <Section title="👤 Founders">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    <Image src="/CEO.jpeg" alt="CEO" width={100} height={100} className='rounded-full'/>
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Nursan Omarov</h3>
                <p className="text-blue-400 font-semibold mb-4">CEO & FOUNDER</p>
                <p className="text-blue-400 leading-relaxed">
                  Nursan Omarov is a 17-year-old AI/ML developer and visionary entrepreneur from Kazakhstan, currently building Advisora.io—an AI-powered platform, which allows consulting firms train and deploy their own AI-agents, designed to democratize access to strategic insights for small and medium businesses. Nursan has single-handedly built miscellaneous complex MVPs and ML models using Next.js, TypeScript, PostgreSQL, TRPC, PyTorch, Python, SQL, and LLMs’ APIs.

He is currently developing Kazakhstan’s first domestic Large Language Model (LLM) tailored for the consulting domain. His work combines relentless execution with intellectual rigor, aiming to position Advisora as a billion-dollar company and a global disruptor in the consulting ecosystem.

“I don’t believe in waiting years to start; I build as I learn. Theory without execution is wasted potential.” — Nursan Omarov
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    <Image src="/CTO.jpeg" alt="CTO" width={100} height={100} className='rounded-full'/>
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Alimzhan Tokushev</h3>
                <p className="text-purple-400 font-semibold mb-4">CPO & CO-FOUNDER</p>
                <p className="text-purple-400 leading-relaxed">
                  Alimzhan Tokushev – CPO & Co-Founder of Advisora

Alimshan Tokushev, 19, is the Chief Product Officer and Co-Founder of Advisora.io. With a deep understanding of both user experience and system architecture, he plays a pivotal role in turning complex AI-driven concepts into usable, elegant products. Alimzhan bridges the gap between cutting-edge ML/AI development and real-world business utility.

He leads product vision, internal tooling architecture, and future LLM roadmap strategies—ensuring Advisora remains intuitive for clients while technically superior under the hood. As a self-taught coder and product strategist, Alimzhan represents the new generation of AI-native builders who design with both scalability and ethics in mind.

“We don’t just build products—we build systems that learn, adapt, and scale with our clients.” — Alimzhan Tokushev
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>
      </div>
    
);
};