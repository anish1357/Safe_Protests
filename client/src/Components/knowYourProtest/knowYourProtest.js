import React, { useEffect } from "react";
import "./knowYourProtest.css";
import M from "materialize-css";

const Faq = () => {
  useEffect(() => {
    var elem = document.querySelector(".collapsible.popout");
    M.Collapsible.init(elem);
  }, []);
  return (
    <div>
      <div>
        <h3 style={{ marginLeft: '23px' }}>Know Your Rights</h3>
        <ul className="collapsible popout">
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">pan_tool</i>Your rights
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    {" "}
                    1. Your rights are strongest in what are known as
                    “traditional public forums,” such as streets, sidewalks, and
                    parks. You also likely have the right to speak out on other
                    public property, like plazas in front of government
                    buildings, as long as you are not blocking access to the
                    government building or interfering with other purposes the
                    property was designed for.
                  </li>
                  <li className="change">
                    2. Private property owners can set rules for speech on their
                    property. The government may not restrict your speech if it
                    is taking place on your own property or with the consent of
                    the property owner.
                  </li>
                  <li className="change">
                    3. Counterprotesters also have free speech rights. Police
                    must treat protesters and counterprotesters equally. Police
                    are permitted to keep antagonistic groups separated but
                    should allow them to be within sight and sound of one
                    another.
                  </li>
                  <li className="change">
                    {" "}
                    4. When you are lawfully present in any public space, you
                    have the right to photograph anything in plain view,
                    including federal buildings and the police. On private
                    property, the owner may set rules related to photography or
                    video.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">videocam_off</i>What to do if you are stopped
              or detained for taking photographs
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    1. Always remain calm and never physically resist a police
                    officer.
                  </li>
                  <li className="change">
                    2. Police cannot detain you without reasonable suspicion
                    that you have or are about to commit a crime or are in the
                    process of doing so.
                  </li>
                  <li className="change">
                    3. If you are stopped, ask the officer if you are free to
                    leave. If the answer is yes, calmly walk away.
                  </li>
                  <li className="change">
                    4. If you are detained, ask the officer what crime you are
                    suspected of committing, and remind the officer that taking
                    photographs is your right under the First Amendment and does
                    not constitute reasonable suspicion of criminal activity..
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">gavel</i>What happens if the police
              issues an order to disperse the protest?
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    1. Shutting down a protest through a dispersal order must be
                    law enforcement’s last resort. Police may not break up a
                    gathering unless there is a clear and present danger of
                    riot, disorder, interference with traffic, or other
                    immediate threat to public safety.
                  </li>
                  <li className="change">
                    2. If officers issue a dispersal order, they must provide a
                    reasonable opportunity to comply, including sufficient time
                    and a clear, unobstructed exit path.
                  </li>
                  <li className="change">
                    3. Individuals must receive clear and detailed notice of a
                    dispersal order, including how much time they have to
                    disperse, the consequences of failing to disperse, and what
                    clear exit route they can follow, before they may be
                    arrested or charged with any crime
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">local_police</i>If you are stopped by the Police
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    1. You have the right to make a local phone call, and if
                    you’re calling your lawyer, police are not allowed to
                    listen.
                  </li>
                  <li className="change">
                    2. You never have to consent to a search of yourself or your
                    belongings. If you do explicitly consent, it can affect you
                    later in court.
                  </li>
                  <li className="change">
                    3.Police may “pat down” your clothing if they suspect you have a weapon and may search you after an arrest.
                  </li>
                  <li className="change">
                    4. Ask if you are free to leave. If the officer says yes, calmly walk away.</li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">assignment</i>Do I need a permit?
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    1. You don’t need a permit to march in the streets or on
                    sidewalks, as long as marchers don’t obstruct car or
                    pedestrian traffic. If you don’t have a permit, police
                    officers can ask you to move to the side of a street or
                    sidewalk to let others pass or for safety reasons.
                  </li>
                  <li className="change">
                    2. Certain types of events may require permits. These
                    include a march or parade that requires blocking traffic or
                    street closure; a large rally requiring the use of sound
                    amplifying devices; or a rally over a certain size at most
                    parks or plazas.
                  </li>
                  <li className="change">
                    3. While certain permit procedures require submitting an
                    application well in advance of the planned event, police
                    can’t use those procedures to prevent a protest in response
                    to breaking news events
                  </li>
                  <li className="change">
                    4. Restrictions on the route of a march or sound equipment
                    might violate the First Amendment if they are unnecessary
                    for traffic control or public safety, or if they interfere
                    significantly with effective communication to the intended
                    audience
                  </li>
                  <li className="change">
                    5.A permit cannot be denied because the event is
                    controversial or will express unpopular views.
                  </li>
                  <li className="change">
                    6. If the permit regulations that apply to your protest
                    require a fee for a permit, they should allow a waiver for
                    those who cannot afford the charge.
                  </li>
                </ul>
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header" style={{ fontWeight: "bold" }}>
              <i className="material-icons">sentiment_very_dissatisfied</i>What to do if you believe your
              rights have been violated
            </div>
            <div style={{ fontSize: "20px" }} className="collapsible-body">
              <span>
                <ul>
                  <li className="change">
                    1. When you can, write down everything you remember,
                    including the officers’ badge and patrol car numbers and the
                    agency they work for.
                  </li>
                  <li className="change">2. Get contact information for witnesses.</li>
                  <li className="change">3. Take photographs of any injuries.</li>
                  <li className="change">
                    4. Once you have all of this information, you can file a
                    written complaint with the agency’s internal affairs
                    division or civilian complaint board.
                  </li>
                </ul>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Faq;
