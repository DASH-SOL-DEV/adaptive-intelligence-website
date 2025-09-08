import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header/Header';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';

const EcoPage = ({ treeCardStats }) => {
  return (
    <>
      <Header />

      {/* Section 1: Hero */}
      <section className="eco-hero">
        <div className="hero-background">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
            alt="Lush green landscape with rolling hills and a river"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center">
              <h1 className="main-title">
                Sustainability at Adaptive 
                <span className="position-relative d-inline-block"> {/* Ensure span is inline-block to wrap content */}
                  Intelligence
                  <Image
                    src="/images/shape/shape_122.svg"
                    alt="underline"
                    width={400}
                    height={8}
                    style={{position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)' }} /* Centering the underline */
                  />
                </span>
              </h1>
              <p className="hero-subtitle">
                At Adaptive Intelligence, sustainability isn’t a side note—it’s at the center of how we work. We believe building the future of industries means protecting the future of our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Living Resource Hub */}
      <section className="resource-hub-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="sc-title">Our Commitment</div>
              <h2 className="section-title">A Living Resource for Growth and Responsibility</h2>
              <p className="section-description">
                This page is more than an introduction to our values—it’s a resource. Here you’ll find practical tools, critical research, and a community hub for leaders, creatives, and innovators.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Item 1: Tools */}
            <div className="col-md-6 col-lg-4">
              <div className="hub-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3 className="card-title">Practical Tools & Frameworks</h3>
                <p className="card-text">Actionable resources for embedding sustainability directly into your business model.</p>
              </div>
            </div>
            {/* Item 2: Research */}
            <div className="col-md-6 col-lg-4">
              <div className="hub-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h3 className="card-title">Archived Research & Reports</h3>
                <p className="card-text">Access to critical documents, including NOAA papers, that are not always easy to find.</p>
              </div>
            </div>
            {/* Item 3: Community */}
            <div className="col-md-6 col-lg-4">
              <div className="hub-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="card-title">A Hub for Innovators</h3>
                <p className="card-text">A place to share ideas and collaborate on keeping our businesses and our environment thriving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact By The Numbers (TreeCard) */}
      <section className="impact-section">
        <div className="impact-background">
           <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
            alt="Sunlight filtering through a dense green forest canopy"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
          <div className="impact-overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Image src="/images/logo/62fbf4327b17746206b87f63_white logo.svg" alt="TreeCard Logo" width={150} height={50} style={{ margin: '0 auto 20px auto' }} /> {/* Centering TreeCard logo */}
              <h2 className="section-title text-white">Our Environmental Impact</h2>
              <p className="section-description text-white-70">
                In partnership with TreeCard, we track our agency's contribution to reforestation and ocean cleanup.
              </p>
            </div>
          </div>
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <div className="stat-number">{(treeCardStats.trees || 0).toLocaleString()}</div>
                <div className="stat-label">Trees Planted</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <div className="stat-number">{(treeCardStats.acres || 0).toFixed(1)}</div>
                <div className="stat-label">Acres of Tree Coverage</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <div className="stat-number">{(treeCardStats.carbon || 0).toLocaleString()}</div>
                <div className="stat-label">Tons of Carbon Absorbed</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <div className="stat-number">{(treeCardStats.bottles || 0).toLocaleString()}</div>
                <div className="stat-label">Plastic Bottles Removed</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center cta-container">
              <a href="https://www.treecard.org/#getcard" target="_blank" rel="noopener noreferrer" className="eco-button">
                <span>Join TreeCard</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: NOAA Papers */}
      <section className="noaa-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src="/images/assets/environmental-impact.jpeg"
                alt="Archived scientific documents and papers"
                width={600}
                height={500}
                objectFit="cover"
                className="noaa-image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Why We’re Hosting the NOAA Papers</h2>
              <p>The NOAA has produced decades of critical research on the state of our environment. Recently, much of this information has been made harder to find. We believe that limiting access to science doesn’t make the problems go away, it only makes them harder to solve.</p>
              <p>At Adaptive Intelligence, we’re committed to keeping these resources accessible. The more we understand the realities of climate change, the better equipped we are to make informed decisions and push for real solutions.</p>
              <a href="https://we.tl/t-v5QlQl4Kao" className="download-button" target="_blank" rel="noopener noreferrer">
                Download NOAA Papers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community Connection */}
      <section className="community-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title">Community Connection</h2>
              <p className="section-description">
                Infusing business with real sustainability can’t be done alone. We’ve created this space to share ideas, resources, and practical steps that help us all make our businesses a little better.
              </p>
              <p className="community-cta">
                Have something to add? Send your suggestions to:
                <a href="mailto:eco@aii.agency" className="email-link">eco@aii.agency</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo_06.svg" alt="logo" width={115} height={80} />
                  </Link>
                </div>
              </div>
              <FooterContent />
              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newsletter</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </div>

      <style jsx>{`
        /* White Header Fix for This Page */
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-link) { color: white !important; }
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item:hover .nav-link),
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item.active .nav-link),
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item.current-menu-item .nav-link) { color: #FF1292 !important; }
        :global(body .theme-main-menu:not(.fixed) .lets-talk-btn) { color: white !important; border-color: white !important; background: transparent !important; }
        :global(body .theme-main-menu:not(.fixed) .lets-talk-btn:hover) { color: black !important; background: white !important; }

        /* Common Section Styles */
        .sc-title { color: #FF1292; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
        .section-title { font-family: 'Recoleta', serif; font-weight: 400; color: #151937; margin-bottom: 20px; }
        .section-description { font-size: 1.1rem; color: #666; line-height: 1.7; max-width: 700px; margin-left: auto; margin-right: auto; }

        /* Section 1: Hero */
        .eco-hero { position: relative; height: 80vh; min-height: 600px; display: flex; align-items: center; color: white; text-align: center; }
        .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); }
        .main-title { font-family: 'Recoleta', serif; font-size: 4rem; font-weight: 400; color: white; line-height: 1.2; }
        .hero-subtitle { font-size: 1.25rem; color: rgba(255, 255, 255, 0.85); max-width: 800px; margin: 30px auto 0; line-height: 1.6; }
        
        /* Section 2: Resource Hub */
        .resource-hub-section { padding: 120px 0; background: #f8f9fa; }
        .hub-card { background: white; padding: 40px; border-radius: 12px; height: 100%; text-align: center; transition: all 0.3s ease; }
        .hub-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.08); }
        .card-icon { color: #FF1292; margin-bottom: 20px; }
        .card-title { font-family: 'Recoleta', serif; font-size: 1.5rem; color: #151937; margin-bottom: 15px; }
        .card-text { color: #666; line-height: 1.6; }

        /* Section 3: Impact Numbers */
        .impact-section { padding: 120px 0; position: relative; color: white; }
        .impact-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
        .impact-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(21, 25, 55, 0.85) 0%, rgba(255, 18, 146, 0.6) 100%); }
        .impact-section .section-title { color: white; }
        .text-white-70 { color: rgba(255,255,255,0.7); }
        .stat-card { background: rgba(255, 255, 255, 0.1); padding: 30px 20px; border-radius: 12px; backdrop-filter: blur(10px); height: 100%; }
        .stat-number { font-size: 3rem; font-weight: 600; line-height: 1; color: white; }
        .stat-label { font-size: 1rem; color: rgba(255, 255, 255, 0.8); margin-top: 10px; }
        .cta-container { margin-top: 60px; }
        
        .eco-button {
          background: white; color: black; border: 1px solid #ff1292; border-radius: 0; padding: 15px 30px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s ease; font-weight: 500; cursor: pointer;
        }
        .eco-button:hover {
          background: #ff1292; border-color: #ff1292; color: white;
        }

        /* Section 4: NOAA Papers */
        .noaa-section { padding: 120px 0; background: white; }
        .noaa-image { border-radius: 12px; }
        .noaa-section p { font-size: 1rem; color: #666; line-height: 1.8; margin-bottom: 20px; }
        .download-button { display: inline-flex; align-items: center; gap: 10px; background: #151937; color: white; padding: 16px 32px; text-decoration: none; font-weight: 500; margin-top: 20px; transition: all 0.3s ease; }
        .download-button:hover { background: #FF1292; transform: translateY(-2px); }

        /* Section 5: Community Connection */
        .community-section { padding: 120px 0; background: #f8f9fa; }
        .community-cta { font-size: 1.2rem; color: #151937; margin-top: 30px; }
        .email-link { color: #FF1292; text-decoration: none; font-weight: 600; margin-left: 8px; border-bottom: 2px solid transparent; transition: border-color 0.3s ease; }
        .email-link:hover { border-color: #FF1292; }

        /* Responsive Styles */
        @media (max-width: 991px) { .main-title { font-size: 3rem; } .noaa-image { margin-bottom: 40px; } }
        @media (max-width: 768px) { .eco-hero { height: 70vh; } .main-title { font-size: 2.2rem; } .hero-subtitle { font-size: 1.1rem; } .resource-hub-section, .impact-section, .noaa-section, .community-section { padding: 80px 0; } .section-title { font-size: 2rem; } .stat-card { margin-bottom: 20px; } .stat-number { font-size: 2.2rem; } }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const fallbackData = { trees: 332, acres: 1.2, carbon: 348, bottles: 1676 };
  let finalStats = fallbackData;


  try {
    // Updated URL to access the specific sheet by GID and get CSV format
    const sheetId = '1ICb8PWttvv0leKmfmJWXSGhXkZz5UAxChmFamV_bh1c';
    const gid = '859204154'; // The specific sheet GID from your URL
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch Google Sheet: ${response.status} ${response.statusText}`);
    }
    
    const csvText = await response.text();
    
    // Parse the CSV - looking for the TOTALS row (row 10)
    const rows = csvText.split('\n');
    
    let totalsRow = null;
    let totalsRowIndex = -1;
    
    // Find the row that contains "TOTALS"
    for (let i = 0; i < rows.length; i++) {
      console.log(`🔍 [TreeCard] Checking row ${i}:`, rows[i]);
      if (rows[i].includes('TOTALS')) {
        totalsRow = rows[i].split(',');
        totalsRowIndex = i;
        break;
      }
    }
    
    if (totalsRow && totalsRow.length >= 5) {
    
      // Parse the values from the totals row
      // Row structure: Name, Trees Planted, Area Covered (ACRES), Carbon Absorbed (TONS), Ocean Plastic Bottles Removed
      const parsedData = {
        trees: parseInt(totalsRow[1].replace(/"/g, '').trim()) || fallbackData.trees,
        acres: parseFloat(totalsRow[2].replace(/"/g, '').trim()) || fallbackData.acres,
        carbon: parseInt(totalsRow[3].replace(/"/g, '').trim()) || fallbackData.carbon,
        bottles: parseInt(totalsRow[4].replace(/"/g, '').trim()) || fallbackData.bottles
      };
      
      
      finalStats = parsedData;
    } else {
      console.warn("⚠️ [TreeCard] Could not find TOTALS row in Google Sheet data. Using fallback data.");
    }

  } catch (error) {
    console.error('❌ [TreeCard] Full error:', error);
    // On error, we'll use the hardcoded fallback data
  }


  return {
    props: {
      treeCardStats: finalStats,
    },
    revalidate: 1, // Re-generate the page every 1 second for testing
  };
}

export default EcoPage;