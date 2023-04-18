import React from 'react';

// collecting all images from assets/images folder
function importAll(imgContext) {
    return imgContext.keys().map(imgContext);
};  
const pWorks = importAll(require.context('../../assets/images/works/personal', false, /\.(png|jpe?g|svg)$/));
const gWorks = importAll(require.context('../../assets/images/works/group', false, /\.(png|jpe?g|svg)$/));


export default function Works() {

  return (
    <>
    <section className="personal">

           <h3 id="personal">Personal Works</h3>

            <div className="WorkContent border-left">
                {/* put images in separate folders, create array come back and map through images */}
                <div className="lgTagFloat">
                    <a href="https://zmag33z.github.io/prework-study-guide/" className="mobile" title="Pre-Work Study Guide"><img className="lgTopic" src={ pWorks[0]} width="756"  /></a>
                        <div className="desktop">
                            <a href="https://zmag33z.github.io/prework-study-guide/" title="Pre-Work Study Guide">Click to View</a>
                        </div>
                </div>

                <div className="smTagFloat">
                    <a href="https://zmag33z.github.io/week-4-challenge/" className="mobile" title="Coding Quiz Challenge"><img className="smTopic" src={pWorks[1]} width="756"  /></a>
                        <div className="desktop">
                            <a href="https://zmag33z.github.io/week-4-challenge/" title="Coding Quiz Challenge">Click to View</a>
                        </div>
                </div>

                <div className="smTagFloat">    
                    <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" className="mobile" title="Work Day Scheduler"><img className="smTopic" src={pWorks[3]} width="756"  /></a>
                    <div className="desktop">
                        <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" title="Work Day Scheduler">Click to View</a>
                    </div>
                </div>

                <div className="smTagFloat">
                    <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" className="mobile" title="Team Profile Generator Applicaiton"><img className="smTopic" src={pWorks[2]} width="756"  /></a>
                    <div className="desktop">
                        <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" title="Team Profile Generator Applicaiton">Click to View</a>
                    </div>
                </div>
                
            </div>      
    </section>

    <section className="group">

        <h3 id="group">Group Works</h3>

         <div className="WorkContent border-left">

             <div className="lgTagFloat">
                <a href="https://marchetype.github.io/the-box-project/" className="mobile" title="The Box Project"><img className="smTopic" src={gWorks[3]} width="756" /></a>
                     <div className="desktop">
                         <a href="https://marchetype.github.io/the-box-project/" title="The Box Project">Click to View</a>
                     </div>
             </div>

             <div className="smTagFloat">
                <a href="https://github.com/calebgdavidson/Rate_my_TA" className="mobile" title="Rate My Ta"><img className="smTopic" src={gWorks[1]} width="756" /></a>
                     <div className="desktop">
                         <a href="https://github.com/calebgdavidson/Rate_my_TA" title="Rate My Ta">Click to View</a>
                     </div>
             </div>

             
             <div className="smTagFloat">
                <a href="https://recipe-p3-mern.herokuapp.com/" className="mobile" title="Recipe Search"><img className="smTopic" src={gWorks[0]} width="756"  /></a>
                    <div className="desktop">
                        <a href="https://recipe-p3-mern.herokuapp.com/" title="Recipe Search">Click to View</a>
                    </div>
            </div>

    </div>

 </section>
 </>
  );
}
