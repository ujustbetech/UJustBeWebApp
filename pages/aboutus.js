import React from "react";
import "../styles/global.scss";
import "../styles/register.scss";
import "../styles/registerform.scss";
import "../styles/upload.scss";
const AboutUs = () => {
  return (
    <section className="enrollment-main ">
      {/* Header */}
      
      <div className="pagetitle">
        <button className="back-btn">←</button>
        <h3>About UJustBe</h3>
      
            </div>
            <div className="innerContainer fullwidth">
      {/* Content Section */}
      <div className="aboutus-content">
      <p>
        Earn by Passing Referrals to others; Grow Own Business by Receiving Referrals
      </p>
      <p>
        Be yourself. Be in the moment. Do what you love. Create, Connect, and Celebrate.
        Give a little time and get back in multiples.
      </p>

      <p><strong>WHY:</strong> To see happy faces around. To JUST BE!</p>

      <p>
        <strong>What:</strong> UJustBe is about connecting with people, understanding people’s needs 
        and serving them by providing what they need. UJustBe is one big community which helps 
        individuals to fulfill their dreams and become super-successful in their lives.
      </p>

      <p>
        <strong>How:</strong> UJustBe does not believe in employee-employer relationships but believes 
        that every individual has some or the other potential and can be useful to society in 
        some or the other way. These are UJustBe Partners. UJustBe also believes that these 
        Partners are responsible for the growth of the enterprise. Hence, UJustBe distributes 
        80% of the referral fees received back to its Partners.
      </p>

      <p>
        <strong>Listed Partners:</strong> Listed Partners offers their services on UJustBe 
        Platform to reach across the globe through its network of Partners. UJB is a sales 
        platform for existing businessmen, which also provides opportunities to budding Entrepreneurs.
      </p>
    </div>

      <div className="aboutus-footer">
  <button className="disclaimer-btn">Disclaimer</button>
  <p>© 2020, UJustBe Enterprise or its affiliates</p>
  <p>Version 2.2.1 <span>Build 221001</span></p>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
