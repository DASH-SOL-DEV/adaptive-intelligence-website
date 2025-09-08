// This is your single source of truth for all resources.
// The new MyMood AI case study has been added.

export const resourceDatabase = {
  'mymood-ai-case-study': {
    // --- Core Info ---
    id: 5,
    slug: 'mymood-ai-case-study',
    title: 'Case Study: How MyMood AI Hit 1M+ Downloads',
    description: 'Discover how Adaptive Intelligence launched MyMood AI to #26 in the App Store with 1M+ downloads and $200K+ monthly revenue.',
    client: 'MyMood AI',
    
    // --- Page Display Info ---
    type: 'case-study',
    badge: 'Case Study: MyMood AI',
    category: 'App Marketing',
    industry: 'AI & Mobile Apps',
    tags: ['Brand Identity', 'UX/UI Copywriting', 'PPC Strategy', 'Influencer Marketing'],
    duration: 'Launch Campaign',
    featured: true,
    heroImage: '/images/case-studies/myMood AI.jpg', // Placeholder path for the new image
    
    // --- Download Info ---
    fileName: 'MyMood AI Case Study_20250902_094121_0000.pdf',
    downloadName: 'MyMood AI Case Study_20250902_094121_0000.pdf',
    nextStepsCTA: 'launch your app',
    
    // --- Page Content ---
    testimonial: {
      quote: "Very professional and amazing work. Great communicator and able to adapt to what we needed!",
      author: "Kale Abrahamson",
      position: "CEO of MyMood AI"
    },
    insights: [
      'Naming, brand identity, and messaging frameworks',
      'UX/UI copywriting for app engagement and retention',
      'Digital marketing and PPC strategies that fueled adoption',
      'Influencer partnerships that drove early growth',
      'Metrics and results that set the foundation for scaling'
    ],
    benefits: [
      'Spark ideas for brand positioning and market entry',
      'Learn proven strategies for digital growth for mobile apps',
      'Avoid common pitfalls in launching new applications and products',
      'Complete MyMood AI success story analysis'
    ],
    metrics: {
      downloads: '1M+',
      appStoreRank: '#26',
      revenue: '$200K+/mo'
    },
    results: "1M+ Downloads",
  },
  'infstones-case-study': {
    // --- Core Info ---
    id: 1,
    slug: 'infstones-case-study',
    title: 'How InfStones Earned Global Press Coverage Across Top Media Outlets',
    description: 'Strategic positioning and PR campaign that helped InfStones secure massive funding and achieve global media recognition in the competitive crypto space.',
    client: 'InfStones',
    
    // --- Page Display Info ---
    type: 'case-study',
    badge: 'Case Study: InfStones',
    category: 'Digital Marketing',
    industry: 'Blockchain & Crypto',
    tags: ['Brand Strategy', 'PR & Media', 'Blockchain Infrastructure'],
    duration: 'Campaign',
    featured: true,
    heroImage: '/images/case-studies/InfStones.png',
    
    // --- Download Info ---
    fileName: 'Adaptive Intelligence — InfStones Case Study_20250902_094057_0000.pdf',
    downloadName: 'Adaptive Intelligence — InfStones Case Study_20250902_094057_0000.pdf',
    nextStepsCTA: 'create your success story',
    
    // --- Page Content ---
    testimonial: {
      quote: "Amazing writer/copy editor. Professional, excellent language skills, ethical/high integrity, will definitely work with again.",
      author: "Zhenwu Shi",
      position: "CEO of InfStones"
    },
    insights: [
      'Brand strategy and market positioning in the competitive crypto space',
      'Digital strategy and Go-To-Market strategies for blockchain infrastructure',
      'How strategic positioning supported InfStones in securing $66M in funding',
      'The press release that drove a spike in Google search interest',
      'PR and media outreach that captured coverage from reputable outlets'
    ],
    benefits: [
      'Complete InfStones success story analysis',
      'Strategic positioning insights for crypto companies',
      'Press coverage methodology and tactics',
      'Key takeaways for blockchain businesses',
      'Funding strategy insights ($66M raised)'
    ],
    metrics: {
      funding: '$66M',
      coverage: 'Global',
      searchSpike: '300%'
    },
    results: "Global Press Coverage", // For the archive page
  },

  'market-trends-2025': {
    // --- Core Info ---
    id: 2,
    slug: 'market-trends-2025',
    title: '2025 Market Trend Report',
    description: "Discover the trends shaping the future of marketing—from nostalgic branding to AI-powered personalization and everything in between.",
    client: 'Adaptive Intelligence',
    
    // --- Page Display Info ---
    type: 'report',
    badge: '2025 Market Trend Report',
    category: 'Market Insights',
    industry: 'Marketing & Strategy',
    tags: ['Nostalgia Marketing', 'AI Personalization', 'Consumer Trends'],
    duration: 'Annual',
    featured: true,
    heroImage: '/images/case-studies/unnamed.png',
    
    // --- Download Info ---
    fileName: '2025 Market Trend Report_20250902_094215_0000.pdf',
    downloadName: '2025 Market Trend Report_20250902_094215_0000.pdf',
    nextStepsCTA: 'implement these insights',
    
    // --- Page Content ---
    testimonial: {
      quote: "We share our most impactful insights so you can apply the lessons to your own business, in hopes that you'll keep us in mind when you have future marketing questions.",
      author: "Adaptive Intelligence",
      position: "Marketing Strategy Team"
    },
    insights: [
      'Emotional connections through nostalgia marketing',
      'Retro visuals, fonts, and design trends',
      'Human-centered content in an AI-driven world',
      'Hyper-personalized marketing strategies',
      'Transparent communication that builds trust',
      'Interactive content, AR experiences, and voice search optimization'
    ],
    benefits: [
      '8+ key marketing trends for 2025',
      'Consumer behavior insights and predictions',
      'Technology impact analysis (AI, AR, Voice)',
      'Actionable implementation strategies',
      'Case studies from leading brands'
    ],
    metrics: {
      trends: '8+',
      insights: '25+',
      scope: 'Global'
    },
    results: "8+ Key Insights", // For the archive page
  },
  
  'marketing-strategy-template': {
    id: 3,
    slug: 'marketing-strategy-template',
    title: 'Marketing Strategy Template',
    description: 'Comprehensive template to organize your marketing strategy, budget, and team structure.',
    fileName: 'Marketing_Strategy_Template.pdf',
    downloadName: 'Marketing_Strategy_Template.pdf',
    type: 'template',
    client: 'Adaptive Intelligence',
    industry: 'Marketing & Strategy',
    benefits: [
      'Complete marketing plan template',
      'Budget allocation guidelines and frameworks',
      'Team structure recommendations',
      'Channel optimization strategies',
      'ROI measurement frameworks'
    ],
    metrics: {
      sections: '12+',
      frameworks: '5+',
      examples: '20+'
    },
    nextStepsCTA: 'build your strategy',
    featured: false,
  },
  
};