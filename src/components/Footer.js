import React from "react";

import Call from "../components/phone-svgrepo-com.svg";
import Navigation from "../components/maps-and-flags-pin-svgrepo-com.svg";
import WhatsApp from "../components/icons8-whatsapp.svg";
import Messenger from "../components/icons8-facebook-messenger.svg";
import Facebook from "../components/icons8-facebook.svg";
import Instagram from "../components/icons8-instagram.svg";
import Youtube from "../components/icons8-youtube.svg";

export default function Footer() {
  const styleP = {
    textAlign: "center",
    fontSize: "1.5vw",
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-el">
          <div className="footer-cards contact-footer">
            <p style={styleP}>Contact</p>
            <p>
              <a href="linkedin.com/in/raul-jurca-0801211b5" target="_blank">
                Jurca Raul
              </a>
            </p>
           <p> <a href="emailto:jurcaraull@gmail.com">contact@spinning.ro</a></p>
           <div>
             <a href="tel:+40766927215">
              <img className="svg" src={Call} />
            </a>
            <a href="https://wa.me/40766927215">
              <img className="svg" src={WhatsApp} />
            </a>
            <a href="http://m.me/jurcaraul18/">
              <img className="svg" src={Messenger} />
            </a>
            </div>
            
          </div>

          <div className="footer-cards adress-footer">
            <p style={styleP}>Adress</p>
            <div>
              <p>Divici Nr.13N, Caras Severin, RO</p>
              <a
                href="https://www.google.ro/maps/place/Spinning+la+Divici/@44.7782471,21.4424393,17z/data=!3m1!4b1!4m5!3m4!1s0x47505760a230c6c7:0x3c4d55239969161c!8m2!3d44.778302!4d21.4446102?hl=ro"
                target="_blank"
              >
                <img className="svg" src={Navigation} />
              </a>
            </div>
          </div>

          <div className="footer-cards social-footer">
            <p style={styleP}>Socials</p>
            <a href="https://www.facebook.com/spinningladivici" target="_blank">
              <img className="svg" src={Facebook} />
            </a><a href="https://www.instagram.com/" target="_blank">
              <img className="svg" src={Instagram} />
            </a><a href="https://www.youtube.com/" target="_blank">
              <img className="svg" src={Youtube} />
            </a>
          </div>
        </div>

        <author className="author">
          <span>All Right Reserved © 2022 </span>
          <a href="linkedin.com/in/raul-jurca-0801211b5" target="_blank">
           Jurca Raul 
          </a>
        </author>
      </footer>
    </>
  );
}
