import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
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
        </Head>
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
                  <Link href="/">
                    <a className="home-link">Home</a>
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
                className="home-link01"
              >
                About
              </a>
            </div>
            <div className="home-container09">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link02"
              >
                Blog
              </a>
            </div>
            <div className="home-container10">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                Support
              </a>
            </div>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
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
                className="home-link05"
              >
                Homepage
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                Updates
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
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
                className="home-link08"
              >
                Blog
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                Support Forum
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
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
                className="home-link11"
              >
                Careers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                Ambassador Program
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
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
              className="home-link14"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000f1a;
          }
          .home-image {
            top: 0px;
            right: 0px;
            height: 67.22222222222223vh;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 9.25925925925926vh;
            display: flex;
            z-index: 10;
            position: relative;
            align-items: center;
            padding-left: 3.3854166666666665vw;
            padding-right: 0px;
            justify-content: space-between;
            background-color: #12212b;
          }
          .home-container02 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-image01 {
            height: 2.314814814814815vh;
            object-fit: cover;
          }
          .home-text {
            color: #ffffff;
            height: 2.314814814814815vh;
            font-size: 1.8518518518518519vh;
            font-family: Euclid Circular B;
            margin-left: 0.5208333333333334vw;
          }
          .home-button {
            height: 9.25925925925926vh;
            display: flex;
            font-size: 20px;
            font-style: normal;
            transition: 0.3s;
            align-items: center;
            font-family: Euclid Circular B;
            font-weight: 400;
            padding-top: 0px;
            border-color: #1e2d37;
            border-width: 0px;
            padding-left: 3.3854166666666665vw;
            border-radius: 0px;
            padding-right: 3.3854166666666665vw;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: #12212b;
            border-left-width: 2px;
          }
          .home-button:hover {
            border-color: #0080ff;
            background-color: #0080ff;
          }
          .home-text01 {
            color: #ffffff;
            height: 2.314814814814815vh;
            font-size: 1.8518518518518519vh;
          }
          .home-image02 {
            height: 2.314814814814815vh;
            object-fit: cover;
            margin-left: 0.5208333333333334vw;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 6.018518518518518vh;
            z-index: 10;
            align-items: center;
            justify-content: space-between;
          }
          .home-image03 {
            height: 2.962962962962963vh;
            object-fit: cover;
          }
          .home-container04 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container06 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-link {
            color: #ffffff;
            font-size: 1.8518518518518519vh;
            margin-top: 1.1111111111111112vh;
            font-family: Euclid Circular B;
            margin-bottom: 0.9259259259259259vh;
            text-decoration: none;
          }
          .home-image04 {
            width: 50%;
            object-fit: cover;
          }
          .home-container08 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-link01 {
            color: #74818b;
            font-size: 1.8518518518518519vh;
            margin-top: 1.1111111111111112vh;
            transition: 0.3s;
            font-family: Euclid Circular B;
            margin-left: 2.6041666666666665vw;
            margin-bottom: 0.9259259259259259vh;
          }
          .home-link01:hover {
            color: #ffffff;
          }
          .home-container09 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-link02 {
            color: #74818b;
            font-size: 1.8518518518518519vh;
            margin-top: 1.1111111111111112vh;
            transition: 0.3s;
            font-family: Euclid Circular B;
            margin-left: 2.6041666666666665vw;
            margin-bottom: 0.9259259259259259vh;
          }
          .home-link02:hover {
            color: #ffffff;
          }
          .home-container10 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-link03 {
            color: #74818b;
            font-size: 1.8518518518518519vh;
            margin-top: 1.1111111111111112vh;
            transition: 0.3s;
            font-family: Euclid Circular B;
            margin-left: 2.6041666666666665vw;
            margin-bottom: 0.9259259259259259vh;
          }
          .home-link03:hover {
            color: #ffffff;
          }
          .home-link04 {
            color: #74818b;
            font-size: 1.8518518518518519vh;
            margin-top: 1.1111111111111112vh;
            transition: 0.3s;
            font-family: Euclid Circular B;
            margin-left: 2.6041666666666665vw;
            margin-bottom: 0.9259259259259259vh;
          }
          .home-link04:hover {
            color: #ffffff;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-items: flex-start;
            padding-top: 5.648148148148148vh;
            justify-content: space-between;
          }
          .home-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: 12.962962962962964vh;
            padding-left: 5.208333333333333vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text02 {
            color: #ffffff;
            font-size: 5.925925925925926vh;
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
            line-height: 7.5vh;
            margin-bottom: 4.62962962962963vh;
            text-transform: capitalize;
          }
          .home-text05 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
          }
          .home-text12 {
            color: #0080ff;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 5.7407407407407405vh;
            align-items: center;
            justify-content: flex-start;
          }
          .home-text14 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            margin-right: 1.3020833333333333vw;
          }
          .home-image05 {
            height: 3.0555555555555554vh;
            object-fit: cover;
          }
          .home-image06 {
            left: 0px;
            bottom: 1.5740740740740742vh;
            height: 17.037037037037038vh;
            position: absolute;
            object-fit: cover;
          }
          .home-image07 {
            height: 93.88888888888889vh;
            object-fit: cover;
            padding-right: 9.375vw;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 18.51851851851852vh;
            justify-content: center;
          }
          .home-video {
            height: 74.07407407407408vh;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 18.51851851851852vh;
            padding-left: 13.88888888888889vh;
            padding-right: 13.88888888888889vh;
            justify-content: space-between;
          }
          .home-container16 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 16.01851851851852vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text15 {
            color: #ffffff;
            font-size: 4.444444444444445vh;
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
            line-height: 5.648148148148148vh;
          }
          .home-text16 {
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
          }
          .home-text18 {
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
          }
          .home-text19 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-text20 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-text22 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 6.296296296296297vh;
            justify-content: flex-start;
          }
          .home-container18 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            margin-right: 2.6041666666666665vw;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container18:hover {
            background-color: #0080ff;
          }
          .home-image08 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text23 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-container19 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container19:hover {
            background-color: #0080ff;
          }
          .home-image09 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text24 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-image10 {
            height: 74.07407407407408vh;
            object-fit: cover;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 18.51851851851852vh;
            padding-left: 13.88888888888889vh;
            padding-right: 13.88888888888889vh;
            justify-content: space-between;
          }
          .home-image11 {
            height: 81.57407407407408vh;
            object-fit: cover;
          }
          .home-container21 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 19.814814814814813vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text25 {
            color: #ffffff;
            font-size: 4.444444444444445vh;
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
            line-height: 5.648148148148148vh;
          }
          .home-text28 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-text29 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-text31 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 6.296296296296297vh;
            justify-content: flex-start;
          }
          .home-container23 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            margin-right: 2.6041666666666665vw;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container23:hover {
            background-color: #0080ff;
          }
          .home-image12 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text32 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-container24 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container24:hover {
            background-color: #0080ff;
          }
          .home-image13 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text33 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 18.51851851851852vh;
            padding-left: 13.88888888888889vh;
            padding-right: 13.88888888888889vh;
            justify-content: space-between;
          }
          .home-container26 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 16.01851851851852vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text34 {
            color: #ffffff;
            font-size: 4.444444444444445vh;
            font-style: normal;
            font-family: Euclid Circular B SemiBold;
            font-weight: 400;
            line-height: 5.648148148148148vh;
          }
          .home-text37 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-text38 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-text40 {
            font-style: normal;
            font-family: Euclid Circular B;
            font-weight: 400;
          }
          .home-container27 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 6.296296296296297vh;
            justify-content: flex-start;
          }
          .home-container28 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            margin-right: 2.6041666666666665vw;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container28:hover {
            background-color: #0080ff;
          }
          .home-image14 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text41 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-container29 {
            flex: 0 0 auto;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 2.962962962962963vh;
            padding-left: 2.0833333333333335vw;
            border-radius: 1.8518518518518519vh;
            padding-right: 2.0833333333333335vw;
            padding-bottom: 2.962962962962963vh;
            justify-content: flex-start;
            background-color: #12212b;
          }
          .home-container29:hover {
            background-color: #0080ff;
          }
          .home-image15 {
            height: 2.7777777777777777vh;
            object-fit: cover;
          }
          .home-text42 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            padding-left: 1.1458333333333333vw;
          }
          .home-image16 {
            height: 78.14814814814815vh;
            object-fit: cover;
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 18.51851851851852vh;
            align-items: flex-start;
            padding-top: 7.407407407407407vh;
            padding-left: 7.8125vw;
            padding-right: 7.8125vw;
            justify-content: space-between;
            background-color: #12212b;
          }
          .home-container31 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-image17 {
            height: 3.888888888888889vh;
            object-fit: cover;
          }
          .home-text43 {
            color: #ffffff;
            font-size: 2.037037037037037vh;
            font-family: Euclid Circular B;
            line-height: 3.3333333333333335vh;
            padding-top: 4.62962962962963vh;
          }
          .home-text44 {
            font-family: Euclid Circular B;
          }
          .home-text46 {
            font-family: Euclid Circular B;
          }
          .home-text48 {
            font-family: Euclid Circular B;
          }
          .home-container32 {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .home-container33 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 7.8125vw;
            flex-direction: column;
          }
          .home-text49 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
          }
          .home-link05 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-link05:hover {
            color: #ffffff;
          }
          .home-link06 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link06:hover {
            color: #ffffff;
          }
          .home-link07 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link07:hover {
            color: #ffffff;
          }
          .home-container34 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 7.8125vw;
            flex-direction: column;
          }
          .home-text50 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
          }
          .home-link08 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-link08:hover {
            color: #ffffff;
          }
          .home-link09 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link09:hover {
            color: #ffffff;
          }
          .home-link10 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link10:hover {
            color: #ffffff;
          }
          .home-container35 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text51 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
          }
          .home-link11 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 3.888888888888889vh;
          }
          .home-link11:hover {
            color: #ffffff;
          }
          .home-link12 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link12:hover {
            color: #ffffff;
          }
          .home-link13 {
            color: #737c82;
            font-size: 2.2222222222222223vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Euclid Circular B;
            font-weight: 400;
            line-height: 3.3333333333333335vh;
            padding-top: 2.5925925925925926vh;
          }
          .home-link13:hover {
            color: #ffffff;
          }
          .home-container36 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 7.407407407407407vh;
            border-color: #0080ff;
            border-width: 0px;
            padding-left: 7.8125vw;
            padding-right: 7.8125vw;
            justify-content: flex-start;
            background-color: #12212b;
            border-bottom-width: 0.9259259259259259vh;
          }
          .home-container37 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 5.555555555555555vh;
            border-color: #1e2d37;
            border-width: 0px;
            padding-bottom: 5.555555555555555vh;
            justify-content: space-between;
            border-top-width: 2px;
          }
          .home-text52 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            font-family: Euclid Circular B;
            line-height: 4.62962962962963vh;
          }
          .home-container38 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-image18 {
            height: 2.7777777777777777vh;
            object-fit: cover;
            padding-left: 0.78125vw;
            padding-right: 0.78125vw;
          }
          .home-image19 {
            height: 2.7777777777777777vh;
            object-fit: cover;
            padding-left: 0.78125vw;
            padding-right: 0.78125vw;
          }
          .home-image20 {
            height: 2.7777777777777777vh;
            object-fit: cover;
            padding-left: 0.78125vw;
            padding-right: 0.78125vw;
          }
          .home-image21 {
            height: 2.7777777777777777vh;
            object-fit: cover;
            padding-left: 0.78125vw;
            padding-right: 0.78125vw;
          }
          .home-link14 {
            color: #ffffff;
            font-size: 2.2222222222222223vh;
            transition: 0.3s;
            font-family: Euclid Circular B;
            line-height: 4.62962962962963vh;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            border-bottom-width: 0.16666666666666666vh;
          }
          .home-link14:hover {
            border-color: #737c82;
          }
        `}
      </style>
    </>
  )
}

export default Home
