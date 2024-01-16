import styles from "./forms.module.css";

const Forms = () => {
  return (
    <div className={styles.forms}>
      <div className={styles.loginScreen}>
        <form className={styles.loginSection}>
          <h1 className={styles.xyz}>XYZ</h1>
          <img className={styles.component1emailIcon} alt="" />
          <img className={styles.component1keyIcon} alt="" />
          <img className={styles.component1keyIcon1} alt="" />
          <div className={styles.welcomeOnboardParent}>
            <h1 className={styles.welcomeOnboard}>Welcome Onboard</h1>
            <div className={styles.textFieldParent}>
              <div className={styles.textField}>
                <div className={styles.stroke} />
                <input
                  className={styles.textField1}
                  placeholder="Your Name"
                  type="text"
                />
                <div className={styles.supportingText}>
                  <div className={styles.supportingText1}>Supporting text</div>
                </div>
              </div>
              <div className={styles.textField2}>
                <div className={styles.stroke1} />
                <input
                  className={styles.textField3}
                  placeholder="Company Name"
                  type="text"
                />
                <div className={styles.supportingText2}>
                  <div className={styles.supportingText3}>Supporting text</div>
                </div>
              </div>
              <div className={styles.textField4}>
                <div className={styles.stroke2} />
                <div className={styles.textField5}>
                  <div className={styles.stateLayer}>
                    <div className={styles.content}>
                      <div className={styles.labelText}>
                        <div className={styles.labelText1}>Select Industry</div>
                      </div>
                    </div>
                    <div className={styles.trailingIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer1}>
                          <img
                            className={styles.component1keyboardArrowDowIcon}
                            alt=""
                            src="/component-1keyboard-arrow-down.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.supportingText4}>
                  <div className={styles.supportingText5}>Supporting text</div>
                </div>
              </div>
              <div className={styles.labelTextParent}>
                <div className={styles.labelText2}>
                  Select Number of Locations
                </div>
                <div className={styles.frameParent}>
                  <button className={styles.wrapper}>
                    <div className={styles.div}>1-10</div>
                  </button>
                  <button className={styles.frame}>
                    <div className={styles.div1}>10-50</div>
                  </button>
                  <button className={styles.frameButton}>
                    <div className={styles.div2}>50-150</div>
                  </button>
                  <button className={styles.wrapper1}>
                    <div className={styles.div3}>150+</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.labelText3}>CONTINUE</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
