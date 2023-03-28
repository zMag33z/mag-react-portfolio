import React from 'react';



export default function Blog({ images }) {
  return (
    <>
    <section className="personal">

           <h3 id="Work">Personal Works</h3>

            <div className="WorkContent">

                <div className="lgTagFloat">
                    <img className="lgTopic" src={ images[1]} />
                        <div className="tag">
                            <a href="https://zmag33z.github.io/prework-study-guide/" className="a2" title="Pre-Work Study Guide">Click Here&nbsp;&nbsp;to View</a>
                        </div>
                </div>

                <div className="smTagFloat">
                    <img className="smTopic" src={images[3]} />
                        <div className="tag">
                            <a href="https://zmag33z.github.io/week-4-challenge/" className="a2" title="Coding Quiz Challenge">Click Here&nbsp;&nbsp;to View</a>
                        </div>
                </div>

                <div className="smTagFloat">    
                    <img className="smTopic" src={images[7]} />
                    <div className="tag">
                        <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" className="a2" title="Work Day Scheduler">Click Here&nbsp;&nbsp;to View</a>
                    </div>
                </div>

                <div className="smTagFloat">
                    <img className="smTopic" src={images[5]} />
                    <div className="tag">
                        <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" className="a2" title="Team Profile Generator Applicaiton">Click Here&nbsp;&nbsp;to View</a>
                    </div>
                </div>

            </div>      
    </section>

    <section className="group">

        <h3 id="Work">Group Works</h3>

         <div className="WorkContent">

             <div className="smTagFloat">
                 <img className="smTopic" src={images[6]} />
                     <div className="tag">
                         <a href="https://marchetype.github.io/the-box-project/" className="a2" title="The Box Project">Click Here&nbsp;&nbsp;to View</a>
                     </div>
             </div>

             <div className="smTagFloat">
                 <img className="smTopic" src={images[4]} />
                     <div className="tag">
                         <a href="https://github.com/calebgdavidson/Rate_my_TA" className="a2" title="Rate My Ta">Click Here&nbsp;&nbsp;to View</a>
                     </div>
             </div>
    </div>

 </section>
 </>
  );
}
