import React from "react";
import "./footer.css"

const Footer = () =>{
    return (
    <footer id="footer" class="footer">
        <div class="copyright">
        &copy; Copyright <strong><span>GajuNade</span></strong>.{new Date().getFullYear()}All Rights Reserved
        </div>
  </footer>
    )
}
export default Footer
