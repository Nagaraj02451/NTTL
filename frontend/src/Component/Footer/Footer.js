import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
    <footer>
      <div className='footer'>
        <div className='footerinner'>
          <div className='footerlogo'>
            <img src='/images/footerlogo.png' alt='NTTL' />
          </div>
          <div className='footerinput'>
            <div className='lan'>India - English</div>
            <div className='Footerlan'>
              <img src='/images/footerlang.png' alt='Lang' />
            </div>
          </div>
        </div>
        <div className='footerinfo'>
            <div className='rightinfo'>
              <div>Contact</div>
              <br />
              <div className='addres'>1/146, Bettatti, Yedapalli Post, Coonoor, The Nilgiris, Tamilnadu, 643104 - IN.</div>
              <br />
              <div>+91 98000 98000</div>
              <br />
              <div>info@newtabtechlab.com</div>
            </div>
            <div className='center footerinfohun'>
              <div>Explore</div>
              <br />
              <div>About</div>
              <div className='colllection'>Career</div>
              <div className='colllection'>Consulting</div>
              <div className='colllection'>Industry</div>
              <div className='colllection'>Solution</div>
              <div className='colllection'>Our Process</div>
            </div>
            <div className='footerinfohun'>
              <div>Follow Us</div>
              <br />
              <div>x</div>
              <div className='colllection'>Facebook</div>
              <div className='colllection'>Instagram</div>
              <div className='colllection'>LinkedIn</div>
            </div>
       
        
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </div>
  
    </footer>
    <div className='Footerline'></div>
    <div className='sitema'>
      <div className='siteinner'>
         
            <div>© 2024 NEW TAB TECH LAB PRIVATE LIMITED</div>
            <div>Sitemap</div>
          
          </div>
          </div>
    </>
  )
}

export default Footer
