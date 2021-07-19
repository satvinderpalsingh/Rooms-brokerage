import React from 'react';
import './footer.css'
const currentDate=new Date();
const year= currentDate.getFullYear();

function Footer() {
    return (
        <div className='footer'>
            <p>© {year} Our Project App. All copyrights reserved</p>
            <div className='footer__b'>
                <button className='footer__bi'>Privacy</button>
                <button className='footer__bi'>Terms</button>
                <button className='footer__bi'>Sitemap</button>
                <button className='footer__bi'>Company Details</button>
            </div>
        </div>
    )
}

export default Footer