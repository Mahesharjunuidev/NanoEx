import React, { useState, useEffect } from "react";

export default function Footer({ footerData }) {
  const { footerLogo, copyrightYear, footerText, footerBottom, navigationMenu } = footerData;

  // Sub-component: Back to Top Button
  const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.scrollY > 200);
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    return (
      isVisible && (
        <div className='backtop' onClick={scrollToTop}>
          <img src="src/assets/back-to-top.png" alt="Back to top" />
        </div>
      )
    );
  };

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <BackToTopButton />

            <img src={footerLogo} className='mb-5' alt="footer" />

            <p className='copyright pb-0 mb-0'>
              {copyrightYear} © <span>NanoEx RWA</span> | All Rights Reserved
            </p>

            <p>{footerText}</p>

            <ul>
              {navigationMenu?.map((footerNav, index) => (
                <li key={index}>
                  <a href={footerNav.url}>{footerNav.label}</a>
                </li>
              ))}
            </ul>

            <p>{footerBottom}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
