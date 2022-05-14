import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Blite App - The exclusive app for your school & friends</title>
        <meta
          name="description"
          content="Blite is a social app for your school that connects you with your friends, class, schedule, and tasks. \nIn real time with no teachers."
        />
        <meta
          property="og:title"
          content="Blite App - The exclusive app for your school &amp; friends"
        />
        <meta
          property="og:description"
          content="Blite is a social app for your school that connects you with your friends, class, schedule, and tasks. \nIn real time with no teachers."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c0c58b56-ba2e-4884-b654-10c2c854e7a8/296b759e-b365-4b0b-8f93-2365eebaaa52?org_if_sml=1"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/pattern-hero.svg"
        className="home-image"
      />
      <div className="home-container01">
        <div className="home-container02">
          <img
            alt="image"
            src="/playground_assets/bag.svg"
            className="home-image01"
          />
          <span className="home-text">
            Bring Blite to your school. Become an the Ambassador.
          </span>
        </div>
        <button className="home-button button">
          <span className="home-text01">Ambassador Program</span>
          <img
            alt="image"
            src="/playground_assets/arrow-right1.svg"
            className="home-image02"
          />
        </button>
      </div>
      <div className="home-container03">
        <img
          alt="image"
          src="/playground_assets/header-logo.svg"
          className="home-image03"
        />
        <div className="home-container04">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <Link to="/" className="home-navlink">
                  Home
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/line.svg"
              className="home-image04"
            />
          </div>
          <div className="home-container08">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              About
            </a>
          </div>
          <div className="home-container09">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              Blog
            </a>
          </div>
          <div className="home-container10">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              Support
            </a>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link03"
          >
            Careers
          </a>
        </div>
      </div>
      <div className="home-container11">
        <div className="home-container12">
          <h1 className="home-text02">
            <span>The exclusive app for</span>
            <br></br>
            <span>your school &amp; friends</span>
          </h1>
          <span className="home-text05">
            <span>Blite is a social app for your school that connects</span>
            <br></br>
            <span>you with your friends, class, schedule, and tasks.</span>
            <br></br>
            <span></span>
            <span>
              In real time with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text12">no teachers</span>
            <span>.</span>
          </span>
          <div className="home-container13">
            <span className="home-text14">Coming soon on</span>
            <img
              alt="image"
              src="/playground_assets/play%20app%20store.svg"
              className="home-image05"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/pattern-1.svg"
          className="home-image06"
        />
        <img
          alt="image"
          src="/playground_assets/heroimg.svg"
          className="home-image07"
        />
      </div>
      <div className="home-container14">
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="home-video"
        ></video>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <h1 className="home-text15">
            <span className="home-text16">Track Your Schedule, Then</span>
            <br></br>
            <span className="home-text18">Share It With Friends.</span>
          </h1>
          <span className="home-text19">
            <span className="home-text20">
              Know who’s in your class instantly. You can also manage
            </span>
            <br></br>
            <span className="home-text22">
              your personal and school assignments in Blite
            </span>
          </span>
          <div className="home-container17">
            <div className="home-container18">
              <img
                alt="image"
                src="/playground_assets/calendar.svg"
                className="home-image08"
              />
              <span className="home-text23">Calendar</span>
            </div>
            <div className="home-container19">
              <img
                alt="image"
                src="/playground_assets/task.svg"
                className="home-image09"
              />
              <span className="home-text24">Tasks</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/img1.svg"
          className="home-image10"
        />
      </div>
      <div className="home-container20">
        <img
          alt="image"
          src="/playground_assets/img2.svg"
          className="home-image11"
        />
        <div className="home-container21">
          <h1 className="home-text25">
            <span>
              Add Friends And Make
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>New Friends.</span>
          </h1>
          <span className="home-text28">
            <span className="home-text29">
              Add your friends, view their schedule in real time, and
            </span>
            <br></br>
            <span className="home-text31">
              meet new students based on your similarities
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-container22">
            <div className="home-container23">
              <img
                alt="image"
                src="/playground_assets/discover.svg"
                className="home-image12"
              />
              <span className="home-text32">Discover</span>
            </div>
            <div className="home-container24">
              <img
                alt="image"
                src="/playground_assets/calendar-invite.svg"
                className="home-image13"
              />
              <span className="home-text33">Invite Friends</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container25">
        <div className="home-container26">
          <h1 className="home-text34">
            <span>Messages Built Around Your</span>
            <br></br>
            <span>School Day</span>
          </h1>
          <span className="home-text37">
            <span className="home-text38">
              Talk to your classes, grade, and friends. Want to win
            </span>
            <br></br>
            <span className="home-text40">
              prizes? invite your friends to Blite
            </span>
          </span>
          <div className="home-container27">
            <div className="home-container28">
              <img
                alt="image"
                src="/playground_assets/chatrooms.svg"
                className="home-image14"
              />
              <span className="home-text41">Chatrooms</span>
            </div>
            <div className="home-container29">
              <img
                alt="image"
                src="/playground_assets/share.svg"
                className="home-image15"
              />
              <span className="home-text42">Refer Friends</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/img3.svg"
          className="home-image16"
        />
      </div>
      <div className="home-container30">
        <div className="home-container31">
          <img
            alt="image"
            src="/playground_assets/footerimg.svg"
            className="home-image17"
          />
          <span className="home-text43">
            <span className="home-text44">
              Blite is a social app, we connect
            </span>
            <br></br>
            <span className="home-text46">
              students with their school and friends
            </span>
            <br></br>
            <span className="home-text48">
              through our calendar, task, and chat.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <span className="home-text49">App</span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              Homepage
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              Updates
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06"
            >
              Terms &amp; Conditions
            </a>
          </div>
          <div className="home-container34">
            <span className="home-text50">Support</span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              Blog
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              Support Forum
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              Privacy Statement
            </a>
          </div>
          <div className="home-container35">
            <span className="home-text51">Company</span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              Careers
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              Ambassador Program
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
      <div className="home-container36">
        <div className="home-container37">
          <span className="home-text52">© 2022 Blite, Inc.</span>
          <div className="home-container38">
            <img
              alt="image"
              src="/playground_assets/facebook.svg"
              className="home-image18"
            />
            <img
              alt="image"
              src="/playground_assets/instagram.svg"
              className="home-image19"
            />
            <img
              alt="image"
              src="/playground_assets/twitter.svg"
              className="home-image20"
            />
            <img
              alt="image"
              src="/playground_assets/linkedin.svg"
              className="home-image21"
            />
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link13"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
