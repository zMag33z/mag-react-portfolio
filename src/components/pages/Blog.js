// import React from 'react';

// export default function Blog() {
//   return (
//     <div>
//       <h1>Blog Page</h1>
//       <p>
//         Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
//         Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
//         dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
//         sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
//         sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
//         vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
//         libero. Class aptent taciti sociosqu ad litora torquent per conubia
//         nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
//         lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//         Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
//         in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
//         bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
//         est ligula suscipit velit, sed bibendum turpis dui in sapien.
//       </p>
//     </div>
//   );
// }

import React from 'react';



export default function Blog() {
  return (
    <>
    <section className="Content">

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

    <section className="Content">

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