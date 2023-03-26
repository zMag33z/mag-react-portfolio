import React from 'react';

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default function Works() {
  return (
    <>
    <section class="Content">

           <h3 id="Work">Personal Works</h3>

            <div class="WorkContent">

                <div class="lgTagFloat">
                    <img class="lgTopic" src={ images['PreWork.png'] } />
                        <div class="tag">
                            <a href="https://zmag33z.github.io/prework-study-guide/" class="a2" title="Pre-Work Study Guide">Click Here<br>&nbsp;&nbsp;</br>to View</a>
                        </div>
                </div>

                <div class="smTagFloat">
                    <img class="smTopic" src="./assets/images/quiz.png" />
                        <div class="tag">
                            <a href="https://zmag33z.github.io/week-4-challenge/" class="a2" title="Coding Quiz Challenge">Click Here<br></br>&nbsp;&nbsp;to View</a>
                        </div>
                </div>

                <div class="smTagFloat">    
                    <img class="smTopic" src="./assets/images/workday.png" />
                    <div class="tag">
                        <a href="https://zmag33z.github.io/Week-5-Work-Day-Scheduler/" class="a2" title="Work Day Scheduler">Click Here<br>&nbsp;&nbsp;</br>to View</a>
                    </div>
                </div>

                <div class="smTagFloat">
                    <img class="smTopic" src="./assets/images/team-gen.png" />
                    <div class="tag">
                        <a href="https://github.com/zMag33z/week-10-Team_Profile_Generator/" class="a2" title="Team Profile Generator Applicaiton">Click Here<br>&nbsp;&nbsp;</br>to View</a>
                    </div>
                </div>

            </div>      
    </section>

    <section class="Content">

        <h3 id="Work">Group Works</h3>

         <div class="WorkContent">

             <div class="smTagFloat">
                 <img class="smTopic" src="./assets/images/theboxhaha.png" />
                     <div class="tag">
                         <a href="https://marchetype.github.io/the-box-project/" class="a2" title="The Box Project">Click Here<br>&nbsp;&nbsp;</br>to View</a>
                     </div>
             </div>

             <div class="smTagFloat">
                 <img class="smTopic" src="./assets/images/ta-review.png" />
                     <div class="tag">
                         <a href="https://github.com/calebgdavidson/Rate_my_TA" class="a2" title="Rate My Ta">Click Here<br>&nbsp;&nbsp;</br>to View</a>
                     </div>
             </div>
    </div>

 </section>
 </>
  );
}
