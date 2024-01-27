import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Divide as Hamburger } from 'hamburger-react'
function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav>
            <div className='Navbar'>
                <div>
                    <div className='logohead'>
                    <a href='/'>    <img src='/images/logo.png' alt='NTTL' /> </a>
                    </div>
                </div>
                <div>
                    <div className='NavCollection'>
                      <a href='/about'><div className='pages'>About</div></a>  
                      <a href='/solution'> <div className='pages'>Solutions</div></a>  
                        <a href='/consulting'><div className='pages'>Consulting</div></a>
                        <div className='pages'>Our Process</div>
                      <a href="/industry"><div className='pages'>Industries</div></a>
                        <div className='connect'>Let's Connect</div>
                        <div className='linehead'>
                            <div className='lineinter'></div>
                        </div>
                        <div className='languagelogo'>
                            <img src='/images/lang.png' alt='NTTL' />
                        </div>
                        <div className='lineheadTwo'>
                            <div className='lineinter'></div>
                        </div>
                        <div className='hamburger' >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
              
                </div>

            </div>
            <div className={isOpen ? "Menu" : "Menutwo"}>
                <div className='MenuHeade'>
                       <div className='MenuInnter'>
                        <div className='menulogo'>
                            <img src='/images/footerlogo.png' />
                        </div>
                        <div className='MenuIteam'>
                        <div className='languagelogo'>
                            <img src='/images/footerlang.png' alt='NTTL' />
                        </div>
                        <div className='lineheadTwo'>
                            <div className='lineinterTwo'></div>
                        </div>
                        <div className='hamburger' >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                        </div>
                       </div>
                       <div className='Menucolle'>
                        <div>About</div>
                        <div className='pagesTwo'>Solutions</div>
                        <div className='pagesTwo'>Consulting</div>
                        <div className='pagesTwo'>Our Process</div>
                        <div className='pagesTwo'>Industries</div>
                        <div className='connectTwo pagesTwo'>Let’s Connect</div>
                        <div className='pagesTwo'>+91 98000 98000</div>
                        <div className='pagesTwo'>info@newtabtechlab.com</div>
                       </div>
                    </div>
                    </div>
        </nav>
    )
}

export default Navbar
