import React from 'react'
import "../LandingPage/Home.css"
import { datas } from './Datas'
function Industry() {

  return (
<>
<main>
  <div className='MainHome'>

       <section>
           <div className='insutry'>
            <div className='industryinner'>

        <div>Unleashing Innovation at Every Click!</div>
        </div>
        <br />
        <br />
                <div className='arewhoinsus'>
                  <div>Are you an idea-stage entrepreneur with your brilliant concept on a crumpled piece of paper?</div>
                  <div className='areinner'>"From Spark to Soar: Your Tech Odyssey Starts Here!"
                  <br />
                  <br />
                  <div>Transform your ideas into tech wonders with New Tab Tech Lab. Our innovation catalysts work with idea-stage entrepreneurs, offering ideation workshops and rapid prototyping to turn your sparks into a blazing success story.</div>
                  </div>
                </div>
                <div className='innerline'></div>
                <div className='arewhoinsus'>
                  <div>Are you navigating the initial years of your organization?</div>
                  <div className='areinner'>"Building Tomorrow, Today."
                  <br />
                  <br />
                  <div>Embark on your organizational journey with New Tab Tech Lab. Our tech architects blend creativity and functionality to provide a foundation that aligns with your organizational ethos, ready to build tomorrow, today.</div>
                  </div>
                </div>
                <div className='innerline'></div>
              
                <div className='arewhoinsus'>
                  <div>Are you a legacy company seeking Digital Transformation?</div>
                  <div className='areinner'>"Revolutionize, Digitize, Thrive."
                  <br />
                  <br />
                  <div>Elevate your business with New Tab Tech Lab's transformative tech strategies. Seamlessly integrate cutting-edge technologies, streamline operations, and enhance customer experiences. Revolutionize, digitize, and thrive with us!</div>
                  </div>
                </div>
           
                <div className='innerline'></div>
           </div>
        </section> 
       
  </div>
 </main>   
 <main>
  <div className='MainHome'>
  <br />
<br />
<br />
       <section>
           <div className='insutry'>
            <div className='industryinner'>

        <div>Industries</div>
        </div>
    <br />
    <br />
    <br />
    <br />

<div className='industrydatas'>
    
    {
        datas.map((iteams)=>{
            return(
                <>
<div>
    <div className='induatryimagedata'><img src={iteams.image} /></div>
    <div>{iteams.name}</div>
</div>
                </>
            )
        })
    }
    
</div>

             
           </div>
        </section> 
        <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  </div>

 </main>   
 <div className='letstalk'>
   <div className='vhgv'>Let's connect <p className='cyfhv'><img src='/images/arrow.png' /></p></div>
 </div>
</>
  )
}

export default Industry
