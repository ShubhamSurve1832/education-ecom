import React, { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const checkoutpopup = (props) => {

  // useEffect(() => {
  //   $(".check-out-btn").click(function () {
  //     $(".check-out-button").addClass("active");
  //   });
  // })
  return (
    <>


      <section className='checkout-popup'>
        <div className="container">
          <div className="model" id='closepopup'>
          
            <div className="model-content">
              <div className="model-header">
                {/* Terms and Conditions */}
                <span id='CloseAgreePage' onClick={()=>props.closePopup()}><AiOutlineCloseCircle /></span>
              </div>

              <div className="model-body mt-4 custom-scrollbar">
                <div className="content">
                  <h2>Payment & Refund Policy</h2>
                  <ul>
                    <li>Amount paid for any services is non-refundable or non-transferable in any case.</li>
                    <li>Details of the payments received/pending and the tax invoice shall be sent to the student via email with in 48 business hours. The payments of the courses are to be made 100% in advance.</li>
                    <li>The study material shall be released only after receiving complete payment of the opted courses</li>
                    <li>The payment for courses once subscribed by you, is NOT refundable and any amount paid shall stand appropriated. In the event of any suspension or termination of services on account of non-compliance of the Terms of Use, any payment made to the LLP by you shall stand forfeited with immediate effect. Any disputes are subject to Secunderabad jurisdiction.</li>
                  </ul>
                </div>

                <div className="content">
                  <h2>ID and Password</h2>
                  <p>By entering into this Agreement, You acknowledge and agree that Your user ID and password ("Participant Account") is for Your exclusive use only. Use or sharing of Your Participant Account with another user is not permitted and is cause for immediate blocking of Your access to the Website, the Services and the Content, Courseware, and termination of this Agreement. You agree that You are solely responsible for maintaining the confidentiality of Your Participant Account and for all activities that occur under it. You agree to immediately notify our Help and Support Team if You become aware of or have reason to believe that there is any unauthorized use of Your Participant Account. You also agree to take all reasonable steps to stop such unauthorized use and to cooperate with Us in any investigation of such unauthorized uses. We shall not under any circumstances be held liable for any claims related to the use or misuse of Your Participant Account due to the activities of any third party outside of our control or due to Your failure to maintain the confidentiality and security of Your Participant Account.</p>
                </div>

                <div className="content">
                  <h2>Content and Courseware</h2>
                  <p>As a part of our Services offered through our Website, We shall grant you access to our content, courseware, practice tests, and other information, documents, and data which may be in audio, video, written, graphic, recorded, photographic, or any machine-readable format in relation to the specific certification training course You have registered for ("Content and Courseware"). We reserve the right to amend, revise or update the Content and Courseware offered to You. In the event such an amendment, revision or updation occurs, We may require you to pay an additional fee to access such amended, revised, or updated Content and Courseware.</p>
                </div>

                <div className="content">
                  <h2>Usage of the Services</h2>
                  <p>The Services and the Content and Courseware are provided solely for Your personal and non-commercial use to assist you in completing the certification training course You have registered for ("Restricted Purpose"). You are permitted online access to the Website, the Services, and the Content and Courseware and may download, save, or print the Content and Courseware solely for the Restricted Purpose. You are not permitted to reproduce, transmit, distribute, sub-license, broadcast, disseminate, or prepare derivative works of the Content and Courseware, or any part thereof, in any manner or through any communication channels or means, for any purpose other than the Restricted Purpose, without Our prior written consent.</p>
                </div>

                <div className="content">
                  <h2>Intellectual Property Rights</h2>
                  <p>While You are granted a limited and non-exclusive right to use the Website, the Services, and the Content and Courseware for the Restricted Purpose as set forth in this Agreement, You acknowledge and agree that We are the sole and exclusive owner of the Website, the Services and the Content and Courseware and as such are vested with all Intellectual Property Rights and other proprietary rights in the Website, the Services, and the Content and Courseware. You acknowledge and agree that this Agreement other than permitting You to use the Website, the Services, and the Content and Courseware for the Restricted Purpose does not convey to You in any manner or form any right, title or interest of a proprietary, or any other nature in the Website, the Services, and the Content and Courseware.</p>
                </div>

                <div className="content">
                  <h2>Usage of Personal Information of Participants</h2>
                  <p>We reserve the right to feature Your picture in any photos, videos, or other promotional material used by Us. Further, we may use your personal information to inform You about other certification training courses offered by Us. However, we shall not distribute or share your personal information with any third party marketing database or disclose your personal information to any third party except on a case-to-case basis after proper verification of such third party or if required under any applicable law.</p>
                </div>

                <div className="content">
                  <h2>Limitation of Liability</h2>
                  <p>You expressly agree that use of the Website, the Services, and the Content and Courseware are at Your sole risk. We do not warrant that the Website or the Services or access to the Content and Courseware will be uninterrupted or error free; nor is there any warranty as to the results that may be obtained from the use of the Website, the Services or the Content and Courseware or as to the accuracy or reliability of any information provided through the Website, the Services, or the Content and Courseware. In no event will We or any person or entity involved in creating, producing, or distributing the Website, the Services, or the Content and Courseware be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use the Website, the Services, or the Content and Courseware. The disclaimer of liability contained in this clause applies to any and all damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of records or any other material, whether for breach of contract, negligence, or under any other cause of action. You hereby specifically acknowledge that We are not liable for any defamatory, offensive, wrongful, or illegal conduct of third parties, or other users of the Website, the Services or the Content and Courseware and that the risk of damage or injury from the foregoing rests entirely with each user. You agree that Our liability or the liability of Our affiliates, directors, officers, employees, agents, and licensors, if any, arising out of any kind of legal claim (whether in contract, tort or otherwise) in any way connected with the Services or the Content and Courseware shall not exceed the fee you paid to Us for the particular certification training course.</p>
                </div>

                <div className="content">
                  <h2>Term and Termination</h2>
                  <p>This Agreement will become effective upon Your acceptance of the terms of this Agreement by Your clicking on the "I ACCEPT" button and, subject to the terms and conditions of this Agreement, will remain in effect till You maintain a current, fully paid-up online Participant Account, or until terminated by Us, whichever is earlier. We reserve the right to terminate this Agreement and block Your access to the Content and Courseware with immediate effect by sending a written notice through email to You to this effect ("Immediate Termination Date"), if such termination is made as a result of Your misrepresentation, default, misconduct, or breach of Your obligations related to or under this Agreement ("Event of Default"). On the occurrence of any Event of Default, We shall be authorized to exercise all the rights and remedies under this Agreement or applicable Law or available in equity to seek indemnification for any Loss or Claim resulting from any such Event of Default. The provisions of clause 4.3, clause 7.2, clause 8 and clause 11 of this Agreement shall survive the termination of this Agreement.</p>
                </div>

                <div className="content">
                  <h2>Indemnity</h2>
                  <p>You agree to indemnify and hold Us, Our contractors, licensors, directors, officers, employees, and agents, harmless from and against any and all claims, losses, damages, liabilities, and expenses including attorneys' fees, arising out of Your unauthorized use of the Website, the Services, and the Content and Courseware or any violation or breach of this Agreement or any provisions hereof.</p>
                </div>

                <div className="content">
                  <h2>Waiver</h2>
                  <p>Neither failure nor delay on the part of any party to exercise any right, remedy, power, or privilege hereunder shall operate as a waiver thereof, or of the exercise of any other right, remedy, power, or privilege. No term of this Agreement shall be deemed waived, and no breach consented to unless such waiver or consent shall be in writing and signed by the party claimed to have waived or consented. No waiver of any rights or consent to any breaches shall constitute a waiver of any other rights or consent to any other breach.</p>
                </div>

                <div className="content">
                  <h2>Severability</h2>
                  <p>In the event any provision of this Agreement is held invalid or unenforceable under the applicable laws of India, the remaining provisions shall continue in full force and effect, and the Agreement shall be deemed to be reformed by replacing such invalidated or unenforceable provision with a valid and enforceable provision that gives effect as closely as possible to the intentions of the parties as expressed by the invalidated or unenforceable provision.</p>
                </div>

                <div className="content">
                  <h2>Governing Law and Jurisdiction</h2>
                  <p>This Agreement shall be governed by and construed in accordance with the Laws of India and the courts in Hyderabad, India shall have the exclusive jurisdiction over any matter relating to, in connection with, or arising out of, this Agreement.</p>
                </div>

                <div className="content">
                  <h2>Amendment and Assignment</h2>
                  <p>We reserve the right to unilaterally amend or modify this Agreement without giving any prior notification to You. We shall however publish the revised agreement on the Website so that You are aware of the revisions, modifications and amendments made by Us to this Agreement. You acknowledge and agree that it is Your responsibility to check the Website periodically for any revisions, modifications, and amendments. Your continued use of or access to the Website, the Services, and the Content and Courseware following the posting of any changes to this Agreement shall constitute acceptance of those changes. You are not permitted to assign this Agreement or the rights and obligations mentioned in this Agreement to any third party and You only shall be held liable for any breach of this Agreement or any terms and conditions hereof.</p>
                </div>

                <div className="content">
                  <h2>Entire Agreement</h2>
                  <p>This Agreement, along with the Privacy Policy, Refund Policy, Rescheduling Policy, Terms of Use, and any additional guidelines, rules, and/or disclaimers posted on the Website constitutes the entire agreement governing Your use of our Website and supersedes any prior agreements, if any, relating to any matter dealt within this Agreement.</p>
                </div>


                <div className="check-out-btn" id="check-out-btn" onClick={()=>props.agreePopup()}>
                  <p className='btn maroon-btn maroon-btn-arrow'>Agree</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default checkoutpopup