import React from "react";
import Header from "../components/Header";

import { ImSpinner9 } from "react-icons/im";
import colors from "../config/colors";

export default function AboutMePage({}) {
  const [repoData, setRepoData] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    void (async function fetchData() {
      try {
        const url = "https://api.github.com/users/edancerys/repos";
        const response = await fetch(url);
        const data = await response.json();

        setRepoData(data);
      } catch (error) {
        console.log("error ", error);
      }
    })();
    return () => {
      abortController.abort(); // cancel pending fetch request on component unmount
    };
  }, []);

  const HandleRepoData = ({ repo, index }) => {
    const { name, language, html_url, updated_at } = repo;
    const lastUpdate = new Date(updated_at).toLocaleDateString("en-US");

    return (
      <div style={styles.container} key={index}>
        <div
          style={{
            fontSize: 24,
            textTransform: "uppercase",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 16,
            paddingTop: 10,
          }}
        >
          Coded in <span style={{ color: "#D95E5A" }}>{language}</span>{" "}
          language. Last push & code update been on: {lastUpdate}
        </div>
        <div
          style={{
            fontSize: 16,
            paddingTop: 10,
          }}
        >
          Find out more about the project by following the link:{" "}
          <a style={styles.link} target="blank" href={html_url}>
            Project Git Repository
          </a>
        </div>
      </div>
    );
  };

  if (!repoData)
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImSpinner9 size="35px" className="spinner" />
      </div>
    );

  return (
    <div className="bodyContainer">
      <Header />

      <div className="bodyWrapper">
        <div className="banner OrelegaOne">
          <div className="page-content">
            {repoData.map((repo, index) => (
              <HandleRepoData repo={repo} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "20px",
    textAlign: "start",
  },
  link: {
    color: colors.darkBlue,
    paddingRight: "4px",
    textDecoration: "none",
  },
};
