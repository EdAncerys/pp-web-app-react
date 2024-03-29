import * as React from "react";
import { AppContext } from "../../App";
import ImageContainer from "../ImageContainer";
import Image from "../../img/Lego-Man.png";
import textDescription from "../../text/ProjectDescription";
import FooterForBanner from "../FooterForBanner";

import PagePalette from "../../config/PagePalette";
import colors from "../../config/colors";

export default function TickTackToeBanner({}) {
  const { manageAppContext } = React.useContext(AppContext);
  const SLIDE_OVERLAP = manageAppContext.SLIDE_OVERLAP;

  const pageNumber = 2;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: `${SLIDE_OVERLAP * 1.5}px 0 0 0`,
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div className="banner teko">
        <div className="banner-content">
          <div className="image-container">
            <ImageContainer
              img={Image}
              altText="Personal-Portfolio"
              text={textDescription.PP}
              color={PagePalette[pageNumber].secondary}
              backgroundColor={colors.white}
            />
          </div>
        </div>
        <div style={styles.footerContainer}>
          <FooterForBanner
            name="Informational"
            type="Game"
            color={PagePalette[pageNumber].secondary}
            page={pageNumber}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  footerContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
};
