import React from 'react'
import { MessageSquare, FileText, Video, Puzzle, Layers, Grid } from 'lucide-react'
const Index = () => {
    return (
        <div className=" bg-gray-50">
            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            Meets teams where they work
                        </h2>
                        <p className="text-lg text-gray-600">
                            If your team uses it, we integrate with it. Easily add your favorite tools
                            from the Marketplace, keeping everything as your central source of
                            truth.
                        </p>
                        <button className="inline-flex items-center px-8 py-4 border-2 border-black  rounded-full text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            See all integrations
                        </button>
                    </div>

                    {/* Integration Icons Grid */}
                    <div className="flex flex-col space-y-6">
                        {/* First Row - 4 icons */}
                        <div className="grid grid-cols-4 gap-6">
                            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <MessageSquare size={32} className="text-[#464EB8]" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <FileText size={32} className="text-[#00AC47]" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <FileText size={32} className="text-[#4285F4]" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <Puzzle size={32} className="text-[#F24E1E]" />
                            </div>
                        </div>

                        {/* Second Row - 3 icons, centered */}
                        <div className="flex justify-center">
                            <div className="grid grid-cols-3 gap-6 w-3/4">
                                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Grid size={32} className="text-[#36C5F0]" />
                                </div>
                                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Layers size={32} className="text-[#ECB12F]" />
                                </div>
                                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Video size={32} className="text-[#2D8CFF]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index