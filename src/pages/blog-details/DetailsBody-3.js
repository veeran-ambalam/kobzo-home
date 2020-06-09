import React from 'react'
import * as Icon from 'react-feather'

export default class BlogBody extends React.Component {

    state = {
        comments: [
            { id: null, name: 'Meeting with Aaron Rossi', comment: 'Meeting with Aaron Rossi' }
        ],
        name: '',
        comment: ''
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }

        const newComment = {
            name: this.state.name,
            comment: this.state.comment,
            id: Date.now()
        };

        this.setState(state => ({
            comments: state.comments.concat(newComment),
            name: '',
            comment: ''
        }));

        // console.log(this.state.comments)
    }

    render() {
        return (
            <>
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>BLOG DETAILS</h2>
                        </div>
                    </div>
                </div>
                
                <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
                <div className="shape2 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
                <div className="shape3"><img src={require("../../images/shape3.svg")} alt="shape" /></div>
                <div className="shape4"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape5"><img src={require("../../images/shape5.png")} alt="shape" /></div>
                <div className="shape6 rotateme"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape7"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            </div>
            <section className="blog-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 offset-lg-2">
                            <div className="blog-details">
                                <div className="article-img">
                                    <img src={require("../../images/blog-image/blog1.jpg")} alt="blog-details" />
                                    <div className="date">24 <br /> Apr</div>
                                </div>
                                
                                <div className="article-content">
                                    <ul className="category">
                                        <li>
                                            <button className="btn">
                                                Marketplace
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn">
                                                B2B Businesses
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn">
                                                Eco-System
                                            </button>
                                        </li>
                                    </ul>

                                        
                                    <h3>Kobzo’s Marketplace for the Diverse Set of Suppliers</h3>
                                    
                                    <p>Business-to-business e-commerce is generating a lot of interest. There are numerous opportunities to develop competitive advantages when buyers and suppliers collaborate. Diverse suppliers are innovative, flexible, and provide better business value.</p>
                                    
                                    <p>However, buyers may have challenges finding and vetting diverse suppliers that fit their business needs. And suppliers may not have the time or money to respond to rigorous RFP processes. Often the timing of business opportunities does not match well with the quality and availability of information.</p>
                                    
                                    <p>Beyond supplementing your supply chain with more diverse suppliers, Diverse Marketplace helps streamline purchasing processes with a user-friendly, industry recognized procurement platform. You can even merge existing purchasing processes into the system to ensure compliance and enforce standards.</p>

                                    <p>The appeal of doing business online is clear. By bringing together huge numbers of buyers and sellers and by automating transactions, Web markets expand the choices available to buyers, give sellers access to new customers, and reduce transaction costs for all the players. By extracting fees for the transactions occurring within the B2B marketplaces, market makers can earn vast revenues. And because the marketplaces are made from software—not bricks and mortar—they can scale with minimal additional investment, promising even more attractive margins as the markets grow.</p>
                                    
                                    <p>Documentation and information verification continues to remain the most difficult thing in the global logistics industry. The biggest challenges are faced perhaps in areas such as procurement, transportation management, order tracking, and customs collaboration.</p>
                                    
                                    <p>Artificial Intelligence has lately become the saying for nearly all industries. The technology hasn’t left the logistics sector untouched. It is enabling logistics players to automate their supply chain and collate first-hand insights that otherwise remain hidden in the constantly generating data.</p>
                                    
                                    <p>The tech-driven approach allows suppliers to cater to their buyers cost-effective and time-efficiently. This also increases the visibility of scattered supplies originating from a region and helps in bundling them, so that businesses irrespective of their transactional volumes realize modern infrastructure and cheaper tariffs.</p>
                                    
                                    <blockquote className="blockquote">
                                        <p>Kobzo as first company in India to have created a Digital Marketplace of corporates and suppliers. A brand like Kobzo, which is also the pioneer to introduce an e-procurement tool, Kobster Elite has organically grown with a better understanding of corporate needs and implemented them all in the course of time. This is highly reliable as the entire process is transparent.</p>
                                    </blockquote>
                                    <div className="share-post">
                                        <ul>
                                            <li>
                                                <a className="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/KobzoOfficial/"><Icon.Facebook /></a>
                                            </li>
                                            <li>
                                                <a className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/KobzoOfficial"><Icon.Twitter /></a>
                                            </li>
                                            <li>
                                                <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kobzo"><Icon.Linkedin /></a>
                                            </li>
                                            <li>
                                                <a className="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kobzo.official/"><Icon.Instagram /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
    