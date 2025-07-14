import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <li className="l-section section">
        <div className="hire">
          <div className="contact">
            <div className="contact--lockup">
              <div className="modal">
                <div className="modal--information">
                  <p>Mumbai,India</p>
                  <a href="mailto:adityakothari2003@gmail.com">
                    adityakothari2003@gmail.com
                  </a>
                </div>
                <ul className="modal--options">
                  <li>
                    <a href="https://www.linkedin.com/in/aditya-kothari27/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AdityaKothari27">Github</a>
                  </li>
                  <li>
                    <a href="resume.pdf" target="_blank">
                      View Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Layout>
  );
};

export default Contact;
