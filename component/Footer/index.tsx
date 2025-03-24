import React from 'react'
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';

const Index = () => {
    return (
        <footer className="bg-gray-50 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/company" className="text-gray-600 hover:text-blue-600">Company</Link></li>
                            <li><Link href="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
                            <li><Link href="/events" className="text-gray-600 hover:text-blue-600">Events</Link></li>
                            <li><Link href="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link></li>
                            <li><Link href="/investor-relations" className="text-gray-600 hover:text-blue-600">Investor Relations</Link></li>
                            <li><Link href="/foundation" className="text-gray-600 hover:text-blue-600">Atlassian Foundation</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact us</Link></li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">PRODUCTS</h3>
                        <ul className="space-y-3">
                            <li><Link href="/rovo" className="text-gray-600 hover:text-blue-600">Rovo</Link></li>
                            <li><Link href="/jira" className="text-gray-600 hover:text-blue-600">Jira</Link></li>
                            <li><Link href="/jira-align" className="text-gray-600 hover:text-blue-600">Jira Align</Link></li>
                            <li><Link href="/jira-service-management" className="text-gray-600 hover:text-blue-600">Jira Service Management</Link></li>
                            <li><Link href="/confluence" className="text-gray-600 hover:text-blue-600">Confluence</Link></li>
                            <li><Link href="/trello" className="text-gray-600 hover:text-blue-600">Trello</Link></li>
                            <li><Link href="/bitbucket" className="text-gray-600 hover:text-blue-600">Bitbucket</Link></li>
                            <li>
                                <Link href="/all-products" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    See all products
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">RESOURCES</h3>
                        <ul className="space-y-3">
                            <li><Link href="/technical-support" className="text-gray-600 hover:text-blue-600">Technical support</Link></li>
                            <li><Link href="/purchasing" className="text-gray-600 hover:text-blue-600">Purchasing & licensing</Link></li>
                            <li><Link href="/community" className="text-gray-600 hover:text-blue-600">Atlassian Community</Link></li>
                            <li><Link href="/knowledge-base" className="text-gray-600 hover:text-blue-600">Knowledge base</Link></li>
                            <li><Link href="/marketplace" className="text-gray-600 hover:text-blue-600">Marketplace</Link></li>
                            <li><Link href="/account" className="text-gray-600 hover:text-blue-600">My account</Link></li>
                            <li>
                                <Link href="/create-support-ticket" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    Create support ticket
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Learn Section */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">LEARN</h3>
                        <ul className="space-y-3">
                            <li><Link href="/partners" className="text-gray-600 hover:text-blue-600">Partners</Link></li>
                            <li><Link href="/training" className="text-gray-600 hover:text-blue-600">Training & certification</Link></li>
                            <li><Link href="/documentation" className="text-gray-600 hover:text-blue-600">Documentation</Link></li>
                            <li><Link href="/developer" className="text-gray-600 hover:text-blue-600">Developer resources</Link></li>
                            <li><Link href="/enterprise" className="text-gray-600 hover:text-blue-600">Enterprise services</Link></li>
                            <li>
                                <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    See all resources
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
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