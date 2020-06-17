import React from "react"
import * as Icon from "react-feather"
import "./BlogCont.css"

export default class BlogBody extends React.Component {
  state = {
    comments: [
      {
        id: null,
        name: "Meeting with Aaron Rossi",
        comment: "Meeting with Aaron Rossi",
      },
    ],
    name: "",
    comment: "",
  }

  onHandleSubmit = e => {
    e.preventDefault()
    if (!this.state.name.length) {
      return
    }

    const newComment = {
      name: this.state.name,
      comment: this.state.comment,
      id: Date.now(),
    }

    this.setState(state => ({
      comments: state.comments.concat(newComment),
      name: "",
      comment: "",
    }))

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

          <div className="shape1">
            <img src={require("../../images/shape1.png")} alt="shape" />
          </div>
          <div className="shape2 rotateme">
            <img src={require("../../images/shape2.svg")} alt="shape" />
          </div>
          <div className="shape3">
            <img src={require("../../images/shape3.svg")} alt="shape" />
          </div>
          <div className="shape4">
            <img src={require("../../images/shape4.svg")} alt="shape" />
          </div>
          <div className="shape5">
            <img src={require("../../images/shape5.png")} alt="shape" />
          </div>
          <div className="shape6 rotateme">
            <img src={require("../../images/shape4.svg")} alt="shape" />
          </div>
          <div className="shape7">
            <img src={require("../../images/shape4.svg")} alt="shape" />
          </div>
          <div className="shape8 rotateme">
            <img src={require("../../images/shape2.svg")} alt="shape" />
          </div>
        </div>

        <section className="blog-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="blog-details">
                  <div className="article-img">
                    <img class = "containerimage"
                      src={require("../../images/blog-image/blog4_banner.png")}
                      alt="blog-details"
                    />
                    <div className="date">
                      17 <br /> Jun
                    </div>
                  </div>

                  <div className="article-content">
                    <ul className="category">
                      <li>
                        <button className="btn">PRODUCTIVITY</button>
                      </li>
                      <li>
                        <button className="btn">WORK FROM HOME</button>
                      </li>
                      <li>
                        <button className="btn">KOBZO</button>
                      </li>
                    </ul>
                    <div class="containertext">
                      <h3>
                        Working from home? Find it hard to manage work and home?
                      </h3>

                      <p>
                        The year of 2020 was expected to be a golden year for
                        the industry sector. But everything turned out just the
                        opposite of what was planned and predicted. The pandemic
                        changed the working cycle around the world. Unemployment
                        became one of the key concerns of employees. But apart
                        from that, employees also started panicking, stressing
                        and overloading themselves with work that might not even
                        be required. Now we have come to a point where work from
                        home has become our new normal. But have we actually
                        adapted to it?{" "}
                      </p>

                      <p>
                        From senior employees to beginners, everyone is dealing
                        with having work and household chores in the same place.
                        The confusion has led to living both lives at the same
                        time and ultimately causing a lot of stress and
                        disturbance in their personal life.{" "}
                      </p>

                      <p>
                        To help you stay in check, here are a few way you can
                        create a wonderful work-life balance that does not fall
                        prey to the above-mentioned problems:
                      </p>

                      <img
                        class="containerimage"
                        src={require("../../images/blog-image/blog4_1.jpg")}
                        alt="Make Your Checklist"
                      ></img>
                      <div class="containertext">
                        <h4>1. Create your Check-list</h4>
                        <p>
                          It is difficult to come out of the comfort zone of
                          staying at home and fitting your work schedule in it.
                          But instead of doing it all together, planning out the
                          day is important. In your free time, make a note of
                          all the work you have to do which includes both
                          professional and personal work. Divide time
                          accordingly and place it where its visible to you. If
                          something has not be done then shift it to the next
                          day instead of over stressing about it. Changing your
                          daily routine is difficult but consistent effort can
                          bring this change.
                        </p>
                      </div>

                      <h4>2. Create your own workspace</h4>

                      <p>
                        Working on the bed can be very tempting but it is also
                        highly unhealthy in the long run. You cannot work in the
                        same place where you also spend your hours sleeping. Not
                        only does that lead to slower progress in work but also
                        disrupts the sleep cycle and keeps your body inactive.
                        Find a separate place where you can work in peace and
                        can stay active. Having a desk or a small portable desk
                        and chair will be more handy in such conditions.{" "}
                      </p>

                      <h4>3. Don’t hesitate, just ask.</h4>

                      <p>
                        Indecisiveness in asking for help and lack of
                        communication is a common issue for all employees that
                        are working from home. But that is the only key to
                        progress. Asking questions related to work gives you a
                        clear vision on your work flow and shows your interest
                        towards the company. Your opinions matter to the work
                        you do. Try to open up with your boss as they are your
                        best guides. You can also interact with the team
                        unofficially to create better connections and general
                        well-being.
                      </p>

                      <h4>4. Work on your hobbies</h4>

                      <p>
                        Don’t just list your hobbies on your resumes and
                        interviews - start doing them. Nothing gives you more
                        satisfaction than doing what you like and being good at
                        it. Weekends are more than just road trips and parties.
                        Rather than getting depressed on the things you possibly
                        could have done, try embracing this time at home in
                        creating something that you like. Learn a new skill.
                        Work can be monotonous sometimes and there might be
                        thousands of ideas that crossed your mind. Utilize this
                        time on implementing those ideas. If you are too tired
                        then even watching something is like a vacation.
                      </p>

                      <h4>5. Smash your Distractions</h4>

                      <p>
                        It gets very tempting when there is a new notification
                        on your phone but it always starts with one notification
                        and before you know half the day has passed by. While
                        working try to switch of data for all the social media
                        and play some soothing music which will keep you focused
                        and positive. Set your targets and once completed reward
                        yourself with some free time. That will help you
                        maintain a balance.
                      </p>

                      <h4>6. Live at the moment</h4>

                      <p>
                        The major distraction while working is over thinking
                        about something that is unnecessary. It leads to delay
                        in daily routine and actually leads you nowhere. Stop
                        having the fear of unemployment and just give your 100
                        percent to what you have now. Thinking about past or
                        future decisions will only create redundant pressure.
                        Live in the moment and work in the moment.{" "}
                      </p>

                      <img
                        class="containerimage"
                        src={require("../../images/blog-image/blog4_7.jpg")}
                        alt="Make Your Checklist"
                      ></img>
                      <div class="containertext">
                        <h4>7. Never run out of dreams</h4>
                        <p>
                          There is no full stop to the goals you have to
                          achieve. You always have a long way to go and no
                          crisis can stop it from happening. This is only a bad
                          phase of life which will go eventually. Life has a lot
                          more for you to achieve and be to proud of. Nothing is
                          unachievable if persistent hard work and motivation is
                          present.
                        </p>
                      </div>

                      <h4>8. Exercise</h4>

                      <p>
                        As challenging as it sounds, taking out sometime to
                        exercise keeps your body active throughout the day. It’s
                        much better than having 10 cups of coffee. Start by
                        taking out 15mins a day to work out in any form you want
                        to. It also helps you let out your frustration and helps
                        your muscles relax.
                      </p>

                      <img
                        class="containerimage"
                        src={require("../../images/blog-image/blog4_9.jpg")}
                        alt="Make Your Checklist"
                        style={{width : 500 , height : 640}}
                      ></img>

                      <div class="containertext">
                        <h4>9. Drink Water</h4>

                        <p>
                          Though this is the most conventional point, people
                          often tend to forget it. Keeping yourself hydrated is
                          a necessity. Keep two bottles beside you and set an
                          alarm of having water every hour. That is the only
                          distraction you need while working.{" "}
                        </p>

                        <h4>10. Take out some family time</h4>

                        <p>
                          Work is important. It gives you bread and butter but
                          don’t forget the people you will be sharing this bread
                          and butter with. Remember what they mean to you and
                          how important they are. Be vocal about the hurdles you
                          are facing, share your opinions and be more involved
                          in family discussions. If you are an introvert just
                          sit and listen to what they are saying. That helps you
                          be more yourself and stay grounded.
                        </p>

                        <p>
                          People are talking about depression and mental health.
                          This Pandemic is a wakeup call for all the people who
                          took their life for granted and were not maintaining a
                          work life balance. Take the initiative and start
                          working on yourself ,everything else will fall into
                          place eventually.
                        </p>
                      </div>
                      <blockquote className="blockquote">
                        <p>
                          Kobzo’s catalogues are diversified. It is segregated
                          into various categories as well as sub-categories. It
                          is highly personalized and the procurement managers
                          can add new items to the list which are exclusive to
                          their company. The list can be reordered or made
                          little changes before reordering and so on in the
                          forthcoming months. Kobzo’s marketplace platform
                          provides a safe and secure eco-friendly way of
                          procuring corporate goods and through their continuous
                          research and development they innovate big in the
                          procurement sector and stands reliably for its
                          customers.
                        </p>
                      </blockquote>

                      <div className="share-post">
                        <ul>
                          <li>
                            <a
                              className="facebook"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/KobzoOfficial/"
                            >
                              <Icon.Facebook />
                            </a>
                          </li>
                          <li>
                            <a
                              className="twitter"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/KobzoOfficial"
                            >
                              <Icon.Twitter />
                            </a>
                          </li>
                          <li>
                            <a
                              className="linkedin"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.linkedin.com/company/kobzo"
                            >
                              <Icon.Linkedin />
                            </a>
                          </li>
                          <li>
                            <a
                              className="instagram"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.instagram.com/kobzo.official/"
                            >
                              <Icon.Instagram />
                            </a>
                          </li>
                        </ul>
                      </div>
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
