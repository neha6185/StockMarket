import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='d-flex justify-content-center align-items-center'>
      <p>Copyright ⓒ NehaAgrawal {year}</p>
    </footer>
  );
}

export default Footer;
