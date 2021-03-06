import React from "react"
import { navigate } from "gatsby"
import * as Icon from "react-feather"
  
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Products = props => {
  let product_id = 1

  const nav = (id, type, price, e) => {
    if (typeof window !== "undefined") {
      if (type != 3) {
        localStorage.setItem("product_name", "Yoga For Lower Back Pain")
        localStorage.setItem("product_id", id)
        localStorage.setItem("type", type)
        localStorage.setItem("unit_price", price)
        navigate("/checkout")
      } else {
        localStorage.setItem("product_name", "Yoga For Lower Back Pain")
        localStorage.setItem("product_id", id)
        localStorage.setItem("type", type)
        localStorage.setItem("unit_price", price)
      }
    }
  }

  function showForm() {
    document.getElementById("mainForm").style.display = "block"
  }

  return (
    <Layout>
      <SEO title="Yoga For Lower Back Pain - Digital Employee Engagement" />
     
          
      
         
        <section className="shop-details-area ptb-160">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="products-details-image">
                  <ul className="slickslide">
                    <div>
                      <img src={require("../../images/yoga/yoga2.png")} />
                    </div>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="products-details">
                  <h3>Yoga For Lower Back Pain</h3>

                  <p>
                    Perhaps one of the most inevitable effects of not working in
                    an office environment will be adoption of unhealthy postures
                    and habits. It will be very easy for employees to develop
                    lower back pain in these situations. For a mild to moderate
                    low back pain, this carefully adapted set of yoga stretches
                    can be the best remedy to ease the discomfort.
                  </p>
                  <ul className="features">
                    <li>
                      <Icon.CheckSquare /> Exclusive access to Private Video -
                      45 minutes
                    </li>
                    <li>
                      <Icon.CheckSquare /> Lifetime access
                    </li>
                    <li>
                      <Icon.CheckSquare /> Regular Live Calls For Questions
                    </li>
                  </ul>
                  <div className="products-share-social">
                    <span>Share:</span>

                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <Icon.Facebook />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <Icon.Twitter />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <Icon.Linkedin />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <Icon.Instagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ptb-80">
          <div className="container">
            <div className="row flex-wrap">
              <div className="col-lg-4 col-md-4">
                <div className="price-container single-blog-post">
                  <h5 className="text-center">Standard</h5>
                  <p>For small-sized businesses</p>
                  <p>10-50 Users </p>
                  <p className="price">
                    <strong>Rs 80</strong> Per User
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => nav(product_id, 1, 80)}
                  >
                    Buy Now
                  </button>
                  ,
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="price-container single-blog-post">
                  <h5 className="text-center">Premium</h5>
                  <p>For small-sized businesses</p>
                  <p>50-200 Users </p>
                  <p className="price">
                    <strong>Rs 70</strong> Per User
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => nav(product_id, 2, 70)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="price-container single-blog-post">
                  <h5 className="text-center">Ultimate</h5>
                  <p>For small-sized businesses</p>
                  <p>Above 200 Users </p>
                  <p className="price">--</p>
                  <button className="btn btn-primary" onClick={showForm}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
         
    </Layout>
  )
}

export default Products
