import React from 'react';
import Link from "next/link";
import Image from "next/image";

import Header from '@/components/header/Header';
import Testimonial from "@/components/home-page/Testimonial";
import Faq from "@/components/home-page/Faq";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import OurMission from "@/components/about/OurMission";
import Block2 from "@/components/about/Block2";
import CounterSection from "@/components/home-page/Counter";
import Hero from "@/components/home-page/hero";
import LetsTalkButton from '@/components/LetsTalkButton'; // Make sure this import is correct


export const metadata = {
  title: "About Adaptive Intelligence | About Our Agency",
  description: "Learn about Adaptive Intelligence and why we're committed to sustainable, innovative marketing efforts.",
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
    
    const rows = csvText.split('\n');
    
    let totalsRow = null;
    let totalsRowIndex = -1;
    
    // Find the row that contains "TOTALS"
    for (let i = 0; i < rows.length; i++) {
      console.log(`🔍 [About TreeCard] Checking row ${i}:`, rows[i]);
      if (rows[i].includes('TOTALS')) {
        totalsRow = rows[i].split(',');
        totalsRowIndex = i;
        break;
      }
    }
    
    if (totalsRow && totalsRow.length >= 5) {
      const parsedData = {
        trees: parseInt(totalsRow[1].replace(/"/g, '').trim()) || fallbackData.trees,
        acres: parseFloat(totalsRow[2].replace(/"/g, '').trim()) || fallbackData.acres,
        carbon: parseInt(totalsRow[3].replace(/"/g, '').trim()) || fallbackData.carbon,
        bottles: parseInt(totalsRow[4].replace(/"/g, '').trim()) || fallbackData.bottles
      };

      
      finalStats = parsedData;
    } else {
      console.warn("⚠️ [About TreeCard] Could not find TOTALS row in Google Sheet data. Using fallback data.");
    }

  } catch (error) {
    console.error('❌ [About TreeCard] Full error:', error);
  }

  return {
    props: {
      treeCardStats: finalStats,
    },
    revalidate: 1, // Re-generate the page every 1 second for testing
  };
}
const About = ({ treeCardStats }) => {
  return (
    <>
      <Header />

      <Hero isHomePage={false}>
        <div
          className="title-style-fourteen text-center mt-50 mb-50 lg-mb-70"
          data-aos="fade-up"
        >
          <h2 className="main-title font-recoleta fw-normal tx-dark" style={{ color: 'white', marginTop: '10px' }}>
            About Adaptive Intelligence
            <span className="position-relative">
              <Image
                width={302}
                height={9}
                src="/images/shape/shape_186.svg"
                alt="shape"
              />
            </span>
          </h2>
          <p className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20" data-aos="fade-up" style={{ color: 'white' }}>
            We’re in the business of growing your business. At Adaptive Intelligence, we believe creativity is the world’s most valuable asset. By combining raw creativity with best-in-class marketing strategies, data-driven insights, and bold storytelling, we help brands drive the future of industries.
          </p>
        </div>
      </Hero>

      {/* Stats Section - Original Counter */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <CounterSection />
              <div className="text-center mt-30" data-aos="fade-up" data-aos-delay="200">
                <p className="fs-20 tx-dark fw-500">3x Top Creative Agency - Upwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-120 md-pt-100" id="mission">
        <div className="container position-relative">
          <OurMission />
          <Image
            width={449}
            height={808}
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>

      {/* Who We Are Section - Side by Side Layout */}
      <section className="fancy-feature-thirtyTwo mt-180 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative">
                <Image
                  width={600}
                  height={500}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="lazy-img w-100"
                  style={{ borderRadius: '20px' }}
                />
                <div className="position-absolute" style={{ 
                  bottom: '30px', 
                  left: '30px', 
                  background: 'white', 
                  padding: '25px 30px', 
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                  textAlign: 'center'
                }}>
                  <h4 className="m0 tx-dark font-recoleta" style={{ fontSize: '2rem', color: '#FF1292' }}>#1</h4>
                  <p className="m0 fs-16 tx-dark" style={{ marginTop: '5px' }}>Creative Agency</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-5 mt-lg-0 mt-50">
                <div className="title-style-ten">
                  <div className="sc-title">WHO WE ARE</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    Creative Agency. 
                    <span className="position-relative">
                      Way of Thinking.
                      <Image
                        width={235}
                        height={9}
                        src="/images/shape/shape_188.svg"
                        alt="shape"
                      />
                    </span>
                  </h2>
                </div>
                <p className="text-lg tx-dark lh-lg mt-35 mb-25">
                  Adaptive Intelligence is a creative agency that help companies amplify their brand presence, engage the right audiences, and turn visibility into measurable results. We partner with startups and Fortune 500 companies alike in delivering strategy, content, and brand experiences.
                </p>
                <p className="text-lg tx-dark lh-lg mb-35">
                  After securing the #1 position as <a className='alt_link' target='_blank' href="https://www.upwork.com/agencies/adaptiveintelligence/">Upwork's (Nasdaq: $UPWK) Top Creative Agency</a> for three consecutive years, we're on a mission to become the world's leading cloud-based creative agency.
                </p>
                <p className="text-lg tx-dark lh-lg" style={{ fontWeight: '600' }}>
                  <strong>Adaptive Intelligence isn't just a company. It's a way of thinking.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Best Section */}
      <div className="fancy-feature-fiftyNine position-relative mt-140" data-aos="fade-up">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              What We Do{" "}
              <span className="position-relative">
                Best
                <Image
                  width={235}
                  height={9}
                  src="/images/shape/shape_188.svg"
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20" data-aos="fade-up">
                We’ve seen time and again how the simple act of meaningful creation can fuel long-term growth. Our mission is to multiply that impact — sparking the kind of creative exploration that drives innovative learning for brands across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* ==================================================================== */}
      {/* START OF REDESIGNED SECTIONS */}
      {/* ==================================================================== */}

      {/* NEW: Our Values Section */}
      <section className="values-section fancy-feature-thirtyTwo mt-140 lg-mt-120" id="vision">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <div className="sc-title">OUR VISION</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              The Principles That{" "}
              <span className="position-relative">
                Guide Us
                <Image width={219} height={7} src="/images/shape/shape_132.svg" alt="shape"/>
              </span>
            </h2>
          </div>
          <div className="row gx-xxl-5 mt-60 lg-mt-40">
            <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up">
              <div className="card-style-fifteen tran3s text-center h-100">
                <div className="icon m-auto tran3s"><Image src="/images/icon/icon_175.svg" alt="Clarity Icon" className="lazy-img" width={32} height={32} /></div>
                <h4 className="fw-bold tx-dark mt-35 mb-20">Clarity</h4>
                <p>Messaging that cuts through the noise and drives real action.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="card-style-fifteen tran3s text-center h-100">
                <div className="icon m-auto tran3s"><Image src="/images/icon/icon_176.svg" alt="Innovation Icon" className="lazy-img" width={32} height={32} /></div>
                <h4 className="fw-bold tx-dark mt-35 mb-20">Innovation</h4>
                <p>Trusted methods paired with emerging, cutting-edge strategies.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="card-style-fifteen tran3s text-center h-100">
                <div className="icon m-auto tran3s"><Image src="/images/icon/icon_177.svg" alt="Collaboration Icon" className="lazy-img" width={32} height={32} /></div>
                <h4 className="fw-bold tx-dark mt-35 mb-20">Collaboration</h4>
                <p>Every project is a partnership to achieve shared success.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="card-style-fifteen tran3s text-center h-100">
                <div className="icon m-auto tran3s"><Image src="/images/icon/icon_175.svg" alt="Responsibility Icon" className="lazy-img" width={32} height={32} /></div>
                <h4 className="fw-bold tx-dark mt-35 mb-20">Responsibility</h4>
                <p>Growth that respects the future of our planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Sustainability Section */}
      <section className="sustainability-section fancy-feature-thirtyTwo mt-140 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-ten">
                <div className="sc-title">OUR COMMITMENT</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">A Commitment to Sustainability.</h2>
              </div>
              <p className="text-lg tx-dark lh-lg mt-35 mb-45">At Adaptive Intelligence, sustainability is a guiding principle. Every campaign we design considers both business growth and environmental responsibility. We also keep critical climate research accessible, because we believe that creativity and responsibility must go hand in hand.</p>
              {/* Replaced Link with LetsTalkButton */}
              <LetsTalkButton buttonText="Explore Our Eco Initiatives" href="/eco" />
            </div>
            <div className="col-lg-6 col-md-8 ms-auto" data-aos="fade-left">
                <div className="row">
                  <div className="col-6">
                    <div className="counter-block-three text-center mt-35">
                      <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.trees || 311).toLocaleString()}</div>
                      <p>Trees Planted</p>
                    </div>
                  </div>
                   <div className="col-6">
                    <div className="counter-block-three text-center mt-35">
                      <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.acres || 1.2).toFixed(1)}</div>
                      <p>Acres Restored</p>
                    </div>
                  </div>
                   <div className="col-6">
                    <div className="counter-block-three text-center mt-35">
                      <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.carbon || 328).toLocaleString()}</div>
                      <p>Tons of CO2 Absorbed</p>
                    </div>
                  </div>
                   <div className="col-6">
                    <div className="counter-block-three text-center mt-35">
                      <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.bottles || 1674).toLocaleString()}</div>
                      <p>Bottles Removed</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW: Why Brands Choose Us Section */}
      <section className="why-choose-us-section fancy-feature-thirtyTwo mt-140 lg-mt-120" style={{background: '#f8f9fa', padding: '120px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="ps-lg-5">
                <div className="title-style-ten">
                  <div className="sc-title">CLIENT SUCCESS</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">Why Brands Choose Us.</h2>
                </div>
                <p className="text-lg tx-dark lh-lg mt-35 mb-45">Our process is designed for measurable results and long-term partnerships, which is why global leaders trust us with their brands.</p>
                 <ul className="style-none list-item fs-18">
                  <li>Proven track record with Nike, Verizon, Vimeo, and Reebok</li>
                  <li>Upwork’s Top Creative Agency</li>
                  <li>Full-service strategy, content, and brand development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first" data-aos="fade-right">
              <div className="client-logos-wrapper text-center">
                  <div className="logo-item"><Image src="/images/logo/digital-agency-manhattan-611.png" alt="Nike logo" width={90} height={35} /></div>
                  <div className="logo-item"><Image src="/images/logo/P-2.svg" alt="Verizon logo" width={120} height={40} /></div>
                  <div className="logo-item"><Image src="/images/logo/P-3.svg" alt="Vimeo logo" width={110} height={35} /></div>
                  <div className="logo-item"><Image src="/images/logo/P-4.svg" alt="Reebok logo" width={105} height={40} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ==================================================================== */}
      {/* END OF REDESIGNED SECTIONS */}

      {/* FAQ Section */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image width={219} height={7} src="/images/shape/shape_132.svg" alt=""/>
              </span>
            </h2>
          </div>
          <div className="bg-wrapper position-relative mt-80 lg-mt-40" data-aos="fade-up">
            <Faq />
            <Image width={65} height={66} src="/images/shape/shape_133.svg" alt="shape" className="lazy-img shapes shape-one"/>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Let’s Talk
                </h2>
              </div>
              <p className="text-lg mt-45 mb-30 lg-mb-30 lg-mt-40" data-aos="fade-up" data-aos-delay="100">
                At Adaptive Intelligence International, collaboration is an integral part of our methodology. We walk with you every step of the way to ensure that the campaigns, brand, and overall strategies we initiate align with your company’s vision.
              </p>
              <p className="text-lg mb-55 lg-mb-30" data-aos="fade-up" data-aos-delay="150">
                We’re here to turn your vision into a reality. Let’s start building something exceptional together.
              </p>
              <LetsTalkButton buttonText="Lets Talk" targetPage="/contact" />
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>

      {/* Footer */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo_06.svg" alt="logo" width={115} height={80}/>
                  </Link>
                </div>
              </div>
              <FooterContent />
              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newsletter</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </div>

      <style jsx>{`
        /* Styles for NEW sections */
        .values-section .card-style-fifteen {
          background: #F8F9FA;
          border-radius: 20px;
          padding: 35px;
          border: 1px solid #E5E5E5;
          transition: all 0.3s ease; /* Ensure all transitions are smooth */
        }
        .values-section .card-style-fifteen:hover {
          border-color: #FF1292;
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
          
        }
        .values-section .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex; /* Added for centering */
          justify-content: center; /* Added for centering */
          align-items: center; /* Added for centering */
          background: #FF1292; /* Default pink background */
          transition: background 0.3s ease;
          /* transform: translateY(0); - Reset animation start state */
        }
        .values-section .icon img {
          filter: brightness(0) invert(1); /* Default white icon */
          transition: filter 0.3s ease;
        }
        /* On hover, background stays pink, icon stays white (no change from default) */
        .values-section .card-style-fifteen:hover .icon {
          background: #FF1292; 
        }
        .values-section .card-style-fifteen:hover .icon img {
          filter: brightness(0) invert(1);
        }

        .sustainability-section .counter-block-three .main-count {
          font-size: 3rem;
          color: #FF1292;
        }
        .sustainability-section .counter-block-three p {
          font-size: 1.1rem;
          color: #151937;
        }
        
        .why-choose-us-section .client-logos-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        .why-choose-us-section .logo-item {
            text-align: center;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        .why-choose-us-section .logo-item:hover {
            opacity: 1;
        }
        .why-choose-us-section .list-item li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 15px;
        }
        .why-choose-us-section .list-item li::before {
            content: '✓';
            color: #FF1292;
            position: absolute;
            left: 0;
            top: 0;
            font-weight: bold;
        }
        
      `}</style>
    </>
  )
};

export default About;