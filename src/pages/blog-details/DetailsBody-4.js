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
                                    <img src={require("../../images/blog-image/blog2.jpg")} alt="blog-details" />
                                    <div className="date">12 <br /> Mar</div>
                                </div>
                                
                                <div className="article-content">
                                    <ul className="category">
                                        <li>
                                            <button className="btn">
                                                E-commerce
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

                                        
                                    <h3>Mistakes that break the trust between suppliers and customers</h3>
                                    
                                    <p>Customers are hard to earn and easy to lose which is critical since most profitable customers are often your long-term customers. Now let us discuss in detail on those things or mistakes that break the trust between suppliers and customers in procurement industry specifically.</p>
                                    
                                    <p>To a business, making or breaking promises to an extent might not seem like a big deal, but to the customer it sends a clear and direct message: they're not important. Broken promises erode trust and leave clients feeling angry and disappointed. The trust you build when you keep your promises is priceless. </p>

                                    <p>Rude, abrupt, and brash is the perfect example of how not to handle customers. Unfortunately, most of us have encountered people like that in real life. That kind of attitude is toxic, instantly giving customers a terrible impression of your company -- it's the opposite of what good service looks like. In business, we have to be the best version of ourselves at all times.</p>

                                    <p>For most of us, we don't get angry when something goes wrong. We get angry when we feel like no one cares. If it is an urgent procurement and doesn't arrive on time, for instance, you'll no doubt be annoyed. If the customer service advisor you call, however, says "I'm so sorry, there seems to have been a hold up at the depot -- let me look into what we can do for you," you start to feel better.</p>

                                    <p>In any line of business, a sincere and genuine "I'm sorry" is very powerful. Apologizing, and then doing something to make the situation better, can also turn a bad experience into a good one... and those customers can, oddly enough, turn out to be your most influential brand advocates .</p>

                                    <p>We live in an age where instant gratification is the norm. Today's customers want to be able to get in touch with a company quickly and easily, whether by phone, email, or chatting online. The smartest businesses recognize that and make themselves easily available across all channels. Long periods on hold or phones going to voicemail are no longer acceptable. Clients, quite rightly, expect their queries to be dealt with quickly; and companies who don't are risking the loss of customers and a tarnished reputation.</p>

                                    <p>As consumers we all want one thing: to feel valued. The minute someone feels like a number rather than an individual, you've lost them. Small businesses, in particular, have an amazing opportunity to outperform their larger competitors in this regard. Always remember that awesome customer service goes way beyond the workplace.</p>

                                    <blockquote className="blockquote">
                                        <p>Kobzo, as the pioneer in establishing India’s first exclusive Digital Marketplace, makes procurement process easy for the corporates. Kobzo’s service remains as a value added to the procurement process also. Kobzo helps in transforming the lives of Procurement Managers and Suppliers by letting them discovernew products, procure at bulk, centralize sourcing, cut cost and analyze spends by intelligent reports & analytics. And thereby, assures every activity revolving around procurement gets done with good clarity and satisfaction of the results.</p>
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
    