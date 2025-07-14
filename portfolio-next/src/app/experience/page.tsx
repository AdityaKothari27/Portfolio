import Layout from '@/components/Layout';

const Experience = () => {
  return (
    <Layout>
      <li className="l-section section">
        <div className="hire">
          <div className="contact--lockup">
            <div className="modal">
              <div className="modal--information">
                <p>Work Experience</p>
              </div>
              <ul className="modal--options">
                <br />
                AI Intern @ Electronic Payment and Services Pvt Ltd
                <br />
                <div style={{ color: 'blue' }}>Jan 2025 - Present</div>
                <br />
                <br />
                Information Technology Intern @ Yes Securities India Ltd
                <br />
                <div style={{ color: 'blue' }}>May 2024 - July2024</div>
                <br />
                <br />
                Volunteer @ Being Animal Foundation
                <br />
                <div style={{ color: 'blue' }}>May 2022 - June 2022</div>
                <br />
              </ul>
            </div>
          </div>
        </div>
      </li>
    </Layout>
  );
};

export default Experience;
