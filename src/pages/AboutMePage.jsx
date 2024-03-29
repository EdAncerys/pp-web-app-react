import React from "react";
import Header from "../components/Header";

import SocialBanner from "../components/AboutBanner/SocialBanner";
import colors from "../config/colors";

export default function AboutMePage({}) {
  return (
    <div className="bodyContainer">
      <div className="bodyWrapper">
        <div className="banner OrelegaOne">
          <div className="page-content">
            <Header />
            <div style={styles.paragraph}>
              <SocialBanner />
              <div style={styles.paragraph}>
                I am a Retail Manager turned Software Engineer. My new-found
                passion for programming has stemmed from a desire to turn ideas
                into reality and to contribute to building great products. Much
                of my work experience has involved working within a team-based
                culture and I thrive collaborating with others. Coding allows me
                to be constantly learning, creating, and problem-solving.
              </div>
            </div>
            <div style={styles.paragraph}>
              Fast learner and extremely enthusiastic about technology and
              digital products. Enjoying challenges and don't shy away from
              time-consuming challenges that can deliver better results and the
              continuous learning process it involves. Always looking for
              opportunities to continue to learn, challenge myself, and work
              with great people.
            </div>
            <div style={styles.paragraph}>
              <a style={styles.link} target="blank" href="https://makers.tech/">
                Makers Academy
              </a>
              graduate where I have grown as a person and as a developer.
              Learned best practices and methodologies: TDD, Agile development,
              XP values, team projects, code reviews, pair programming and
              more...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  paragraph: {
    marginTop: "20px",
  },
  link: {
    color: colors.darkBlue,
    paddingRight: "4px",
    textDecoration: "none",
  },
};
