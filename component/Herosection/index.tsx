'use client'
import React, { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Card from '@/ui/card';


const Index = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <div>

                <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-10">
                            <h1 className="text-[44px] leading-[1.15] lg:text-[64px] lg:leading-[1.15] font-bold text-[#111827] tracking-[-0.02em]">
                                Great outcomes
                                <br />
                                start with{' '}
                                <span className="relative inline-block">
                                    Jira
                                    
                                    <svg
                                        width="100"
                                        height="32"
                                        viewBox="0 10 100 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="
                                            M0 16
                                            C 5 0, 15 32, 20 16
                                            C 25 0, 35 32, 40 16
                                            C 45 0, 55 32, 60 16
                                            C 65 0, 75 32, 80 16
                                            C 85 0, 95 32, 100 16
                                            "
                                            stroke="#FFA500"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                        />
                                    </svg>


                                </span>
                            </h1>

                            <p className="text-xl text-[#4B5563] max-w-[540px] leading-relaxed">
                                The only project management tool you need to plan and track work across every team.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[#374151]">
                                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] flex-shrink-0" />
                                    <span className="text-[15px]">Seamless team collaboration</span>
                                </div>
                                <div className="flex items-center gap-3 text-[#374151]">
                                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] flex-shrink-0" />
                                    <span className="text-[15px]">Real-time progress tracking</span>
                                </div>
                                <div className="flex items-center gap-3 text-[#374151]">
                                    <CheckCircle2 className="h-5 w-5 text-[#2563EB] flex-shrink-0" />
                                    <span className="text-[15px]">Customizable workflows</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sign Up Form */}
                        <div className="p-8">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-[20px] font-semibold text-[#111827]">Work email</h2>
                                    <p className="text-[14px] text-[#6B7280] mt-1.5">
                                        Find teammates, plus keep work and life separate by using your work email.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-[14px] rounded-[24px] border border-[#D1D5DB] text-[15px] placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all bg-white"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#2563EB] text-white py-[14px] px-4 rounded-[24px] hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2 font-medium text-[15px]"
                                    >
                                        Sign up
                                        <ArrowRight className="h-[18px] w-[18px]" />
                                    </button>
                                </form>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#E5E7EB]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-[#F9FAFB] text-[#6B7280] text-[14px]">Or continue with</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 px-4 py-[10px] border border-[#D1D5DB] rounded-[24px] hover:bg-[#F9FAFB] transition-colors bg-white">
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                                        <span className="font-medium text-[14px] text-[#374151]">Google</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-[10px] border border-[#D1D5DB] rounded-[24px] hover:bg-[#F9FAFB] transition-colors bg-white">
                                        <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
                                        <span className="font-medium text-[14px] text-[#374151]">Microsoft</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen  px-12">
      <div className="">
        <div className="flex gap-2 overflow-auto">
          <Card 
            title="Software Development" 
            subtitle="PRODUCT & ISSUE TRACKING"
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
          />
          <Card 
            title="Marketing" 
            subtitle="PLAN & LAUNCH CAMPAIGNS"
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
          />
          <Card 
            title="IT" 
            subtitle="PLAN & TRACK IT PROJECTS"
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"
          />
          <Card 
            title="Design" 
            subtitle="BUILD CREATIVE WORKFLOWS"
            imageUrl="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=300&q=80"
          />
          <Card 
            title="Operations" 
            subtitle="CREATE CUSTOM PROCESSES"
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
          />
        </div>
      </div>
    </div>
        </div>
    )
}

export default Index