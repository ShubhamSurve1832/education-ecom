


const Analytics = ({ examData, showStrip }) => {


    return (
        <>
            <section className='analytics-section section'>
                <div className="container-l">
                    <h2 className='heading02'>Data Analytics</h2>
                    <h3 className='heading04'>Key Topics</h3>
                    <div className='key-topics-flex'>
                        <div className='box'><h4 className='heading05'>How to Develop a Data-Driven Mindset</h4></div>
                        <div className='box'><h4 className='heading05'>How to Approach a Data Analytics Project</h4></div>
                        <div className='box'><h4 className='heading05'>Understanding Data and the Data Ecosystem</h4></div>
                    </div>
                    <div className='skills-list'>
                        <h3 className='heading04'>Skills Gained Through Data Analytics</h3>
                        <ul>
                            <li className='heading05'><div className='count'>1</div> Recall the analytical and data-driven Mindset characteristic.</li>
                            <li className='heading05'><div className='count'>2</div>Recognize how to set business or client objectives and desired outcomes for a data analytics project.</li>
                            <li className='heading05'><div className='count'>3</div>Recognize the various methods for describing and interpreting data.</li>
                            <li className='heading05'><div className='count'>4</div>Identify the types and categories of data.</li>
                            <li className='heading05'><div className='count'>5</div>Recognize the relationship between data science and data analytics.</li>
                            <li className='heading05'><div className='count'>6</div>Recognize the technology and data ecosystem's characteristics for data analytics.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* DATA VISUALIZATION */}
            <section className='analytics-section section visualization-section '>
                <div className="container-l">
                    <h2 className='heading02'>Data Visualization</h2>
                    <h3 className='heading04'>Key Topics</h3>
                    <div className='key-topics-flex'>
                        <div className='box'><h4 className='heading05'>Communicating Insights from Data</h4></div>
                        <div className='box'><h4 className='heading05'>Making Decisions from Data</h4></div>
                        <div className='box'><h4 className='heading05'>Ways to Visualize Data</h4></div>
                        <div className='box'><h4 className='heading05'>Design Principles for Visualizing Data</h4></div>
                        <div className='box'><h4 className='heading05'>Setting up Business Intelligence in Organizations</h4></div>
                        <div className='box'><h4 className='heading05'>Components of BI Platforms</h4></div>
                        <div className='box'><h4 className='heading05'>How Underlying Data Architecture Affects Reporting and Predictive Analytics Techniques</h4></div>

                    </div>
                    <div className='skills-list'>
                        <h3 className='heading04'>Skills Gained Through Data Visualization</h3>
                        <ul>
                            <li className='heading05'><div className='count'>1</div>Create a data story that includes visualisations.</li>
                            <li className='heading05'><div className='count'>2</div>Determine the perspectives of key stakeholders.</li>
                            <li className='heading05'><div className='count'>3</div>Determine the data requirements of the organisation.</li>
                            <li className='heading05'><div className='count'>4</div>Distinguish between common business intelligence frameworks.</li>
                            <li className='heading05'><div className='count'>5</div>Share data stories across the organization using visualization tools.</li>
                            <li className='heading05'><div className='count'>6</div>Best practices for recall visualization.</li>
                        </ul>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Analytics;