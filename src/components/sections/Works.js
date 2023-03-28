import React from 'react';


export default function Works({ images }) {
  return (
    <>
    <section className="personal">

           <h3 id="personal">Personal Works</h3>

            <div className="WorkContent">

                <div className="lgTagFloat">
                    <a href="https://zmag33z.github.io/prework-study-guide/" className="mobile" title="Pre-Work Study Guide"><img className="lgTopic" src={ images[1]} width="1526" height="856" /></a>
                        <div className="desktop">
                            <a href="https://zmag33z.github.io/prework-study-guide/" className="a2" title="Pre-Work Study Guide">Click Here to View</a>
                        </div>
                </div>

                <div className="smTagFloat">
                    <a href="https://zmag33z.github.io/week-4-challenge/" className="mobile" title="Coding Quiz Challenge"><img className="smTopic" src={images[3]} width="1526" height="856" /></a>
                        <div className="desktop">
                            <a href="https://zmag33z.github.io/week-4-challenge/" className="a2" title="Coding Quiz Challenge">Click Here to View</a>
                        </div>
                </div>

                <div className="smTagFloat">    
                    <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" className="mobile" title="Work Day Scheduler"><img className="smTopic" src={images[7]} width="1526" height="856" /></a>
                    <div className="desktop">
                        <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" className="a2" title="Work Day Scheduler">Click Here to View</a>
                    </div>
                </div>

                <div className="smTagFloat">
                    <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" className="mobile" title="Team Profile Generator Applicaiton"><img className="smTopic" src={images[5]} width="1526" height="856" /></a>
                    <div className="desktop">
                        <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" className="a2" title="Team Profile Generator Applicaiton">Click Here to View</a>
                    </div>
                </div>

            </div>      
    </section>

    <section className="group">

        <h3 id="group">Group Works</h3>

         <div className="WorkContent">

             <div className="lgTagFloat">
                <a href="https://marchetype.github.io/the-box-project/" className="mobile" title="The Box Project"><img className="smTopic" src={images[6]} width="1526" height="856" /></a>
                     <div className="desktop">
                         <a href="https://marchetype.github.io/the-box-project/" className="a2" title="The Box Project">Click Here to View</a>
                     </div>
             </div>

             <div className="smTagFloat">
                <a href="https://github.com/calebgdavidson/Rate_my_TA" className="mobile" title="Rate My Ta"><img className="smTopic" src={images[4]} width="1526" height="856" /></a>
                     <div className="desktop">
                         <a href="https://github.com/calebgdavidson/Rate_my_TA" className="a2" title="Rate My Ta">Click Here to View</a>
                     </div>
             </div>
    </div>

 </section>
 </>
  );
}
