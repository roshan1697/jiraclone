
import React from 'react'
import { Rocket } from 'lucide-react';

const Index = () => {
    return (
        <div className="min-h-screen bg-[#0052CC] flex flex-col">
            {/* Hero Section */}
            <section className="text-white text-center px-4 pt-16 pb-8 md:pt-24 md:pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <Rocket className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Your next move, suggested by AI
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Atlassian Intelligence takes your big ideas and automatically suggests the tasks to help get it done.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-[#0052CC] text-white border-2 border-white rounded-md font-medium hover:bg-[#0043A4] transition-colors">
                        Explore Atlassian Intelligence
                    </button>
                </div>
            </section>

            {/* Video Section */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-[1200px] mx-auto bg-black rounded-lg shadow-xl overflow-hidden">
                    <video
                        className="w-full aspect-video"
                        controls
                        playsInline
                    >
                        <source
                            src="https://wac-cdn.atlassian.com/dam/jcr:88fd1c5c-2840-4e70-a68b-e53be10d6159/suggest-child-issues.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>)
}

export default Index