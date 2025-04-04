import React from 'react'
interface CardProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}
const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl }) => {
    
    return (
        <div className="relative w-[240px]  bg-white overflow-hidden rounded-3xl mb-4 pl-6 pt-6  transition-all duration-300 hover:-translate-y-1   hover:shadow-xl group">
            <div className="space-y-4 h-1/4">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">{subtitle}</p>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>

            <div className="relative mt-6 h-[280px] overflow-hidden bottom-0">
                {/* Orange hover background */}
            
                <div className="absolute bottom-0 right-0 w-32 h-32  bg-orange-500 rounded opacity-70 transform scale-95 group-hover:scale-[3.5] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-500"></div>

                {/* Image */}
                <div className="absolute  h-full w-full pt-4 ">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full  translate-x-12"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card