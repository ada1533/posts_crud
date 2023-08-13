import React, { useEffect } from 'react';
import $ from 'jquery';
import './Footer.css'

const ScrollToggleFooter = () => {
  useEffect(() => {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $('.footer').addClass('show');
        } else {
          $('.footer').removeClass('show');
        }
      });
    });
  }, []);

  return (
    <div className="footer">
      Footer
    </div>
  );
};

export default ScrollToggleFooter;
