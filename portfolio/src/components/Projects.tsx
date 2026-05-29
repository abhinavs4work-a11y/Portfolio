export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Scaling Organic Growth for an AI Startup",
      description: "Led the SEO and inbound demand strategy for a B2B AI company, achieving 3× growth in organic impressions within 3 months and establishing SEO as a sustainable inbound channel.",
      tags: ["SEO Strategy", "Keyword Research", "Content Marketing", "Analytics"],
    },
    {
      id: 2,
      title: "Go-To-Market Strategy for B2B AI Solutions",
      description: "Developed GTM foundations for multiple AI and GenAI solutions, translating technical capabilities into business outcomes and enabling the sales team with structured messaging.",
      tags: ["GTM Strategy", "Product Marketing", "Positioning", "Messaging Frameworks"],
    },
    {
      id: 3,
      title: "Sales Enablement System for an AI Services Company",
      description: "Built sales enablement assets to help explain complex AI solutions to potential clients, improving the effectiveness of sales demos and client conversations.",
      tags: ["Sales Enablement", "Product Marketing", "Technical Storytelling"],
    },
    {
      id: 4,
      title: "Multi-Channel Outbound Campaign for Enterprise Leads",
      description: "Designed outbound campaigns coordinating across LinkedIn and email channels to generate enterprise conversations for AI services, improving targeting and predictable pipeline generation.",
      tags: ["Outbound GTM", "Account Research", "Messaging Strategy"],
    },
    {
      id: 5,
      title: "Data-Driven Website Optimization Using Power BI",
      description: "Built a live analytics dashboard to track website performance and behavior, leading to a 35% improvement in conversion rate through funnel analysis.",
      tags: ["Marketing Analytics", "Power BI", "Funnel Analysis", "CRO"],
    },
    {
      id: 6,
      title: "Launch Strategy for AI Product Suite",
      description: "Planned and executed the launch of multiple AI products, generating 70+ qualified B2B demo requests within the first week and accelerating early pipeline.",
      tags: ["Product Launch", "GTM Strategy", "Product Marketing"],
    },
    {
      id: 7,
      title: "Content Strategy for a D2C Gifting Brand",
      description: "Developed and executed a highly-shareable short-form content strategy that grew the brand's social media audience by 3,000+ followers in one week.",
      tags: ["Content Strategy", "Social Media Marketing", "Audience Growth"],
    },
    {
      id: 8,
      title: "Performance Marketing for a Mental Health Platform",
      description: "Managed Meta ads using behavioral segments and conversion-focused creatives to generate 220+ Sales Qualified Leads in 5 days with strong conversion efficiency.",
      tags: ["Performance Marketing", "Meta Ads", "Lead Generation", "Campaign Optimization"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div id="projects" className="scroll-mt-24 max-w-7xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div id="experience" className="scroll-mt-24 mt-32 border-t border-white/10 pt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Experience</h2>
          
          <div className="relative pl-8 md:pl-0">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-16">
              
              <div className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] z-10" />
                
                <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-semibold text-white">Marketing Consultant</h3>
                    <span className="text-emerald-400 font-mono text-sm px-3 py-1 bg-emerald-400/10 rounded-full border border-emerald-400/20">Jun 2024 - Present</span>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-6">Avkalan.ai | Remote</p>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Supported go-to-market and product marketing initiatives for B2B AI and GenAI offerings.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Conducted market and competitive research to inform product positioning and website narratives.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Drove inbound demand initiatives, resulting in 3× growth in organic impressions and Domain Authority improvement from 8 to 38 within 3 months.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Designed outbound GTM efforts in collaboration with sales through messaging alignment and account research.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Planned content and social media strategy to reinforce product narratives and demand goals.</li>
                  </ul>
                </div>
              </div>

              <div className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-white/30 border-2 border-[#121212] z-10" />
                
                <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-semibold text-white">CEOs Office Intern</h3>
                    <span className="text-gray-400 font-mono text-sm">Oct 2023 - May 2024</span>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-6">Avkalan.ai | Remote</p>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Supported founder-led GTM and product strategy through competitive analysis and market research.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Created product and solution collateral for client-facing conversations.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Worked cross-functionally to support early-stage scaling across marketing, hiring, and operations.</li>
                  </ul>
                </div>
              </div>

              <div className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-white/30 border-2 border-[#121212] z-10" />
                
                <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-semibold text-white">Direct Marketing Intern</h3>
                    <span className="text-gray-400 font-mono text-sm">May 2023 - Jun 2023</span>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-6">Digit Insurance | Bangalore</p>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Conducted customer research and benchmarking to identify gaps in health insurance product journeys.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Synthesized feedback from 140+ customers to surface pain points and improvement opportunities.</li>
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Supported optimization of chatbot and live chat flows to improve query resolution and UX.</li>
                  </ul>
                </div>
              </div>

              <div className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-white/30 border-2 border-[#121212] z-10" />
                
                <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-semibold text-white">B.D Intern</h3>
                    <span className="text-gray-400 font-mono text-sm">Oct 2020 – Nov 2020</span>
                  </div>
                  <p className="text-lg text-gray-300 font-medium mb-6">Wynswell Global Services | Remote</p>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start"><span className="text-white/30 mr-3 hidden sm:inline">▹</span> Supported early outbound efforts through lead research and qualification, contributing to ₹85,000 in converted sales.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Education, Certifications & Skills Grid */}
        <div className="mt-32 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education & Certs */}
          <div id="education" className="scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Education</h2>
            <div className="space-y-8 mb-16">
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-1">MBA (Marketing)</h4>
                <p className="text-gray-400">Symbiosis Institute Of Business Management, Nagpur</p>
                <span className="text-sm font-mono text-gray-500 mt-2 block">2022 - 2024</span>
              </div>
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-1">BBA</h4>
                <p className="text-gray-400">University Of Lucknow, Lucknow</p>
                <span className="text-sm font-mono text-gray-500 mt-2 block">2019 - 2022</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Certifications</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> SEO Advanced (Udemy)</li>
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span> Google Ads (Coursera)</li>
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span> Marketing Analytics (Udemy)</li>
              <li className="flex items-center text-gray-300"><span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span> Power BI Desktop (Coursera)</li>
            </ul>
          </div>

          {/* Skills */}
          <div id="skills" className="scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Skills</h2>
            <div className="space-y-8">
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Growth & Content</h4>
                <div className="flex flex-wrap gap-2 block">
                  {["SEO Strategy", "Content Strategy & Creation", "Inbound Demand Generation", "Social Media Strategy", "Canva", "Capcut", "VN"].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>

              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Product Marketing & GTM</h4>
                <div className="flex flex-wrap gap-2 block">
                  {["Go-to-Market Strategy", "Positioning & Messaging", "Market & Competitive Research", "Sales Enablement", "Product Narratives", "ICP & Use-case Definition"].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>

              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Analytics & Tools</h4>
                <div className="flex flex-wrap gap-2 block">
                  {["Google Analytics (GA4)", "SEO & Demand Analysis", "Power BI", "Advanced Excel", "Automation (n8n)", "Claude Code"].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>

              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Outreach & CRM</h4>
                <div className="flex flex-wrap gap-2 block">
                  {["Apollo.io", "Hunter", "Lemlist", "Instantly", "Linked Helper", "Waalaxy", "Hubspot", "Pipedrive"].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
