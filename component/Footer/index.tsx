import React from 'react'
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';

const Index = () => {
    return (
        <footer className="bg-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#F4F5F7] py-10 px-8">
                    {/* Company Section */}
                    <div>
                        
                        <h3 className="text-xl font-bold text-blue-600 mb-8">Logo</h3>
                        
                        <ul className="space-y-3 ">
                            <li><Link href="/company" className="font-bold hover:text-gray-400 hover:underline text-sm">Company</Link></li>
                            <li><Link href="/careers" className="font-bold hover:text-gray-400 hover:underline text-sm">Careers</Link></li>
                            <li><Link href="/events" className="font-bold hover:text-gray-400 hover:underline text-sm">Events</Link></li>
                            <li><Link href="/blogs" className="font-bold hover:text-gray-400 hover:underline text-sm">Blogs</Link></li>
                            <li><Link href="/investor-relations" className="font-bold hover:text-gray-400 hover:underline text-sm">Investor Relations</Link></li>
                            <li><Link href="/foundation" className="font-bold hover:text-gray-400 hover:underline text-sm">Atlassian Foundation</Link></li>
                            <li><Link href="/contact" className="font-bold hover:text-gray-400 hover:underline text-sm">Contact us</Link></li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-[13px] mb-8">PRODUCTS</h3>
                        <ul className="space-y-3 ">
                            <li><Link href="/rovo" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Rovo</Link></li>
                            <li><Link href="/jira" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Jira</Link></li>
                            <li><Link href="/jira-align" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Jira Align</Link></li>
                            <li><Link href="/jira-service-management" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Jira Service Management</Link></li>
                            <li><Link href="/confluence" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Confluence</Link></li>
                            <li><Link href="/trello" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Trello</Link></li>
                            <li><Link href="/bitbucket" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Bitbucket</Link></li>
                            <li>
                                <Link href="/all-products" className="inline-flex items-center font-bold hover:text-gray-400 hover:underline text-sm">
                                    See all products
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-[13px] mb-8">RESOURCES</h3>
                        <ul className="space-y-3">
                            <li><Link href="/technical-support" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Technical support</Link></li>
                            <li><Link href="/purchasing" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Purchasing & licensing</Link></li>
                            <li><Link href="/community" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Atlassian Community</Link></li>
                            <li><Link href="/knowledge-base" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Knowledge base</Link></li>
                            <li><Link href="/marketplace" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Marketplace</Link></li>
                            <li><Link href="/account" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">My account</Link></li>
                            <li>
                                <Link href="/create-support-ticket" className="inline-flex items-center font-bold hover:text-gray-400 hover:underline text-sm">
                                    Create support ticket
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Learn Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-[13px] mb-8">LEARN</h3>
                        <ul className="space-y-3">
                            <li><Link href="/partners" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Partners</Link></li>
                            <li><Link href="/training" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Training & certification</Link></li>
                            <li><Link href="/documentation" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Documentation</Link></li>
                            <li><Link href="/developer" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Developer resources</Link></li>
                            <li><Link href="/enterprise" className="text-gray-700 hover:text-gray-400 hover:underline text-sm">Enterprise services</Link></li>
                            <li>
                                <Link href="/resources" className="inline-flex items-center font-bold hover:text-gray-400 hover:underline text-sm">
                                    See all resources
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 ">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-600">
                            Copyright © 2025 Atlassian
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                            <Link href="/privacy" className="hover:text-blue-600">Privacy policy</Link>
                            <Link href="/terms" className="hover:text-blue-600">Terms</Link>
                            <Link href="/impressum" className="hover:text-blue-600">Impressum</Link>
                            <button className="inline-flex items-center hover:text-blue-600">
                                <Globe className="h-4 w-4 mr-1" />
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Index