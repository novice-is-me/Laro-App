import React from 'react';

const FooterLinks = ({ title, links }) => {
  return (
    <div className='font-poppins'>
      <h6 className={`mb-4 ${title === "FAQs", "Contact Us:", "Navigate:" ? 'font-bold' : ''}`}>{title}</h6>
      <ul>
        {links.map((link, i) => (
          <li key={i} className={`text-[#3E3E3E] mb-4 ${title === "FAQs" ? 'font-semibold' : ''}`}>
            <a href="#" className={link === "sales@laro-inc.com.ph" ? 'underline' : ''}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
