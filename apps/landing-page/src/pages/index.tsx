import React from 'react';
import { Helmet } from "react-helmet";
import logo from "../images/CKR.png";
import { useStaticQuery, graphql } from 'gatsby';

export function Index() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <div className="container h-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>

      <div className="row align-items-center justify-content-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <img
              src={logo}
              alt="cKr Logo test"
              className="img-fluid"
            /> 
            </div>
          </div>
          <div className="row justify-content-center text-center mb-5">
            <div className="col-sm-12">
              <ul className="nav justify-content-center">
                <li className="nav-item m-2">
                  <a href="https://discord.gg/2smkj7kADy"><i className="fa-brands fa-discord"></i></a>
                </li>
                <li className="nav-item m-2">
                  <a href="https://twitter.com/clickkillreload"><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li className="nav-item m-2">
                  <a href="https://instagram.com/ckr.gg"><i className="fa-brands fa-instagram"></i></a>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-sm-12">
                <h2>Servers</h2>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-sm-12">
            <a href="https://serverranks.com/rust/server/45.121.210.42:49515" target="_blank"><img src="https://serverranks.com/banner/45.121.210.42:49515/banner.png" alt="ServerRanks.com Dynamic Banner"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
