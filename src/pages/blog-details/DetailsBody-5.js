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
                                    <img src={require("../../images/blog-image/blog3.jpg")} alt="blog-details" />
                                    <div className="date">16 <br /> Feb</div>
                                </div>
                                
                                <div className="article-content">
                                    <ul className="category">
                                        <li>
                                            <button className="btn">
                                                office supplies
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn">
                                                B2B Businesses
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn">
                                                KOBZO
                                            </button>
                                        </li>
                                    </ul>

                                        
                                    <h3>Companies are looking beyond price while procuring office supplies</h3>

                                    <p>While choosing an office supply company isn’t a glamorous task, it’s a task that shouldn’t be entered into without some careful consideration. Office supplies are a big expense, and if you’re overpaying or purchasing from different vendors, for your paper, pens, and other essential supplies, you can be losing out big time in the long term. Following are what the companies which procure look forward to,</p>

                                    <p>Companieslook at the website, and review the catalog of products. You should be able to order more than just pens and paper. In fact, having one supplier for as many products as possible should be the goal. You’ll also want to look for a good variety of brands, from the cost savers to the brand names. If you have a favorite pen or brand of paper, make sure they carry it!</p>

                                    <p>Beyond just ordering supplies, check to see if your office supply company offers any additional services. Some important ones to look for are printing, marketing materials, and recycling. Also, look into their rewards program. Do they offer volume discounts or rebates?</p>

                                    <p>It’s not cost-effective to shop around for every single office product you purchase, but some cost-comparing will save you money. Keep in mind that 70% of a company’s office supply cost is generated by 30% of the total products ordered. Take a list of your five or 10 most-ordered office supplies, and compare them to make sure you are getting the best value every time you order.</p>

                                    <p>A fully functional ordering experience is a must. Ordering online means you can easily compare products and prices and keep all your supplies in your shopping cart until you are ready to check out. Make sure they have a good reporting system and order history section so you can easily re-order your frequent supplies. Finally, if you need an approval system, ensure that it’s easy to use, understand, and change, if necessary.</p>

                                    <p>An efficient onboarding process often means they have the resources to continue to provide support as a customer. Ask about their services to transition your ordering from your previous vendor. You should have layers of support, and customer service should be easily accessible.</p>

                                    <p>Depending on the needs and the size of your business, you should have several different delivery options available. If you need a loading dock, front door, or desktop delivery, make sure your office supplier can accommodate that and that you can specify your preference when you order.</p>

                                    <p>Mistakes in delivery, ordering, or payment are inevitable. Ideally, these mistakes don’t happen often; but when they do, you should always be taken care of. Often what defines a good company is how they treat their customers when something goes wrong. Don’t cut costs when it comes to customer service; no one wants to spend valuable time on the phone waiting to speak to someone about a lost or incorrect order. Look for a knowledgeable customer support staff with multiple levels of management. Don’t forget to read their return policies and billing term options.</p>

                                    <p>Don’t be afraid to check reviews and ask around about their reputation. Doing some research on how they are performing financially and how long they’ve been in the industry should give some clues into how they will perform as your office supply vendor. Ultimately, you shouldn’t have to think much about ordering office supplies, so you’ll want to work with a company that is flexible and accommodating.</p>

                                    <p>Choosing the right office supply company may seem daunting given all the available options. However, it can be painless by asking the right questions upfront. Check into their product variety, extra services, pricing, web ordering, onboarding, delivery options, customer service, and reputation. Each of these components is crucial in getting the best possible partner. Then you can focus on providing the best products and services for your clients.</p>
                                
                                    <blockquote className="blockquote">
                                        <p>Kobzo’s catalogues are diversified. It is segregated into various categories as well as sub-categories. It is highly personalized and the procurement managers can add new items to the list which are exclusive to their company. The list can be reordered or made little changes before reordering and so on in the forthcoming months. Kobzo’s marketplace platform provides a safe and secure eco-friendly way of procuring corporate goods and through their continuous research and development they innovate big in the procurement sector and stands reliably for its customers.</p>
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
    