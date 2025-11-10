import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero min-h-[400px] bg-base-200 rounded-box mb-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-8">Our Journey</h1>
            <p className="text-xl mb-6">From humble beginnings to industry innovation, discover how we've grown and evolved since 2017.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
        
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              <h3 className="font-bold text-lg">2017 - Foundation</h3>
              <p>Started as a small team with big dreams. Launched our first product and secured initial funding.</p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-bold text-lg">2019 - Major Expansion</h3>
              <p>Expanded to international markets. Opened offices in three new countries and doubled our team size.</p>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-start timeline-box">
              <h3 className="font-bold text-lg">2021 - Digital Transformation</h3>
              <p>Successfully navigated the global pandemic by implementing innovative digital solutions and remote work culture.</p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-bold text-lg">2023 - Innovation Award</h3>
              <p>Received multiple industry awards for our innovative solutions and sustainable practices.</p>
            </div>
            <hr/>
          </li>
          <li>
            <hr/>
            <div className="timeline-start timeline-box">
              <h3 className="font-bold text-lg">2025 - Future Forward</h3>
              <p>Leading the industry with AI-powered solutions and sustainable technology practices.</p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
          </li>
        </ul>
      </div>

  
    </div>
  )
}

export default About