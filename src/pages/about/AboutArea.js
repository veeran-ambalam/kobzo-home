import React from 'react'

export default function About() {
    return (
        <section className="about-area ptb-80">
			<div className="container ptb-80">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../../images/1.png")} alt="about" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Us</h2>
								<div className="bar"></div>
								<p>Kobzo is a pioneer of the Indian Business to Business industry with a mission to streamline Procurement, boost digital Employee Engagement & Smart Workspaces.</p>
								<p>Previously, as Kobster, we digitized the traditional procurement practices to make them more efficient. However, Kobster has now expanded its products and solutions to cover all procurement, employee and workplace goals. As Kobzo, we are now the one stop solution to:</p>
							</div>
							<ul>
								<li>Small and Medium Enterprises, home offices, corporates, schools and start-ups. <br/></li>
								<li>Enterprises looking to digitize and simplify B2B and procurement.<br/></li>
								<li>Enterprises looking to meet all organizational goals with a simple integrated solution.<br/></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="about-inner-area">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p>Back in 2010, corporate procurement in India had hardly seen the brilliance of Digitalization. Kobzo, which was previously Kobster, took a crack at the then traditional procurement practices. Kobster created a revolutionary e-procurement platform that makes purchasing office supplies as easy as shopping online. Since then, Kobster transformed procurement into a much more strategic function that led to a more streamlined and value-added procurement process</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p>Kobzo’s mission is to transform organizations by creating novel end to end digital solutions to enhance their procurement activities, employee welfare and workplace goals.</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Who we are</h3>
								<p>What started as an idea in 2012 has flourished into a company enabling 5000+ businesses to meet organizational goals. From being incubated at PayPal’s prestigious Start Tank Programme to getting funded, Kobzo (previously Kobster) today is a team of diverse young individuals with an ambition to build a great company that can enhance other organizations.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}