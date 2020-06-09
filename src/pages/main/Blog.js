import React from 'react';
import { Link } from "gatsby"
import * as Icon from 'react-feather';

export default class Blog extends React.Component {
    render() {
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>The News from Our Blog</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link to="/Kobzos-Marketplace-for-the-Diverse-Set-of-Suppliers">
                                        <img src={require("../../images/blog-image/blog1.jpg")} alt="blog" />
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> April 24, 2020
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link to="/Kobzos-Marketplace-for-the-Diverse-Set-of-Suppliers">
                                            Kobzo’s Marketplace for the Diverse Set of Suppliers
                                        </Link>
                                    </h3>
                                    <p>The traditional method of buying and selling with a limited set of locally available clients is well in the past. This article explores the dawn of a new era where technology, digitalization and AI have the capacity to enhance the procurement and selling processes for companies. Such e-marketplaces hold a vast variety of benefits for both buyers and sellers in the B2B e-commerce sector.</p>

                                    <Link className="read-more-btn" to="/Kobzos-Marketplace-for-the-Diverse-Set-of-Suppliers">
                                        Know More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link to="/Mistakes-that-break-the-trust-between-suppliers-and-customers">
                                            <img src={require("../../images/blog-image/blog2.jpg")} alt="blog" />
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 12, 2020
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link to="/Mistakes-that-break-the-trust-between-suppliers-and-customers">
                                            Mistakes that break the trust between suppliers and customers
                                        </Link>
                                    </h3>
                                    <p>Most businesses try to live by what Sam Walton said best “There is only one boss. The customer.” Your most valuable customer will be the one who has complete faith in you and your services. However, trust is a delicate thing that must be handled with care. This article talks about protecting the trust between suppliers and customers and avoiding the mistakes that can break it in the procurement industry.</p>

                                    <Link className="read-more-btn" to="/Mistakes-that-break-the-trust-between-suppliers-and-customers">
                                        Know More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link to="/Companies-are-looking-beyond-price-while-procuring-office-supplies">
                                        <img src={require("../../images/blog-image/blog3.jpg")} alt="blog" />
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> Feb 16, 2020
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link to="/Companies-are-looking-beyond-price-while-procuring-office-supplies">
                                            Companies are looking beyond price while procuring office supplies
                                        </Link>
                                    </h3>

                                    <p>While procurement of any organizational need may seem simple at the first glance, often a lot of variables apart from price factor into it. Companies look for suppliers they can rely on for all future requirements and hence not only expect good prices but also expect stellar service, reliability, delivery and more. This article points towards what companies seek during procurement and how these requirements can be met by supplier companies.</p>

                                    <Link className="read-more-btn" to="/Companies-are-looking-beyond-price-while-procuring-office-supplies">
                                        Know More <Icon.ArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
