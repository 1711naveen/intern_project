import styles from "./Page.css";

const Page = () => {
  return (
    <div className={styles.pages}>
      <div className={styles.cameraDetails}>
        <div className={styles.frameParent}>
          <div className={styles.icbaselineArrowBackParent}>
            <div className={styles.icbaselineArrowBack}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vmsCamerasCameraDetailsParent}>
                <div className={styles.vmsCamerasContainer}>
                  <span>
                    <b>VMS</b>
                  </span>
                  <span className={styles.camerasCameraDetails}>
                    <span>{` / Cameras / `}</span>
                    <span className={styles.cameraDetails1}>
                      Camera Details
                    </span>
                  </span>
                </div>
                <div className={styles.bankEntranceFrontViewCamer}>
                  Bank Entrance-front-view Camera1
                </div>
              </div>
              <div className={styles.viewAndManage}>
                View and manage camera details, recordings and connection
                details
              </div>
            </div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.filterBy}>Filter by</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.search}>Search</div>
            </div>
            <div className={styles.button}>
              <div className={styles.stateLayer}>
                <div className={styles.labelText}>Edit Camera</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.stateLayer}>
                <div className={styles.labelText}>Deactivate</div>
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.stateLayer}>
                <div className={styles.labelText}>Delete Camera</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cameraDetailsInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.bxvideoRecordingParent}>
                  <img
                    className={styles.bxvideoRecordingIcon}
                    alt=""
                    src="/bxvideorecording.svg"
                  />
                  <div className={styles.viewRecordedVideos}>
                    View Recorded Videos
                  </div>
                </div>
                <div className={styles.bxvideoRecordingParent}>
                  <img
                    className={styles.bxvideoRecordingIcon}
                    alt=""
                    src="/uimrefresh.svg"
                  />
                  <div className={styles.viewRecordedVideos}>
                    Refetch Camera
                  </div>
                </div>
              </div>
              <div className={styles.groupContainer}>
                <div className={styles.rectangleContainer}>
                  <img
                    className={styles.groupInner}
                    alt=""
                    src="/rectangle-31@2x.png"
                  />
                  <div className={styles.pmParent}>
                    <div className={styles.pm}>01/05/2023 02:42:21 PM</div>
                    <div className={styles.location}>Hall 01</div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.cameraDetailsParent}>
                      <div className={styles.cameraDetails2}>
                        Camera Details
                      </div>
                      <div className={styles.activeWrapper}>
                        <div className={styles.active}>Active</div>
                      </div>
                    </div>
                    <div className={styles.offlineAlertParent}>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>Location:</div>
                        <div className={styles.coimbatore}>Coimbatore</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>City:</div>
                        <div className={styles.delhiIndia}>Coimbatore</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>Timezone:</div>
                        <div className={styles.delhiIndia}>Delhi-India</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>Date added:</div>
                        <div className={styles.delhiIndia}>
                          Aug 03, 2023 12:01:42 PM
                        </div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>Last update:</div>
                        <div className={styles.delhiIndia}>
                          Aug 03, 2023 12:01:42 PM
                        </div>
                      </div>
                    </div>
                    <div className={styles.offlineAlertParent}>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>
                          Manufacture details:
                        </div>
                        <div className={styles.coimbatore}>ADT</div>
                      </div>
                      <div className={styles.locationParent}>
                        <div className={styles.location}>RTSP/HLS URL:</div>
                        <div className={styles.copyUrl}>Copy URL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cameraHealthAndAlertParent}>
                <div className={styles.cameraHealthAnd}>
                  Camera Health and Alert
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.offlineAlert}>Offline Alert</div>
                        <div className={styles.ifCameraIs}>
                          If camera is continuously offline for
                        </div>
                        <div className={styles.minutes}>12 minutes</div>
                        <div className={styles.sendAnEmailToParent}>
                          <div className={styles.sendAnEmail}>
                            Send an email to
                          </div>
                          <div className={styles.emailcom}>email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.location}>Health Grade</div>
                        <div className={styles.div}>96%</div>
                        <div className={styles.cheersThisCameraHadNoOffParent}>
                          <div className={styles.cheersThisCamera}>
                            Cheers, this camera had no offline time in the last
                            30 days
                          </div>
                          <div className={styles.gradeA}>Grade A</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.offlineAlertParent}>
                        <div className={styles.location}>Health Logs</div>
                        <div className={styles.today0437PmActivatedParent}>
                          <div className={styles.sendAnEmail}>
                            Today, 04:37 pm: Activated
                          </div>
                          <div className={styles.sendAnEmail}>
                            23 Aug, 02:22 pm: Deactivated
                          </div>
                          <div className={styles.sendAnEmail}>
                            21 Aug, 05:12 am: Activated
                          </div>
                          <div className={styles.sendAnEmail}>
                            20 Aug, 02:12 am: Deactivated
                          </div>
                          <div className={styles.sendAnEmail}>
                            19 Aug, 02:12 am: Deactivated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cameraHealthAndAlertParent}>
                <div className={styles.recentRecordingsParent}>
                  <div className={styles.cameraHealthAnd}>
                    Recent Recordings
                  </div>
                  <div className={styles.viewAll}>View All</div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.groupParent1}>
                    <div className={styles.groupDiv}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle-31@2x.png"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-32.svg"
                      />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.groupChild1} />
                        <div className={styles.div1}>
                          <span>{`1:24 / `}</span>
                          <span className={styles.span}>53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recording0121Parent}>
                      <div className={styles.location}>Recording_0121</div>
                      <div className={styles.today0442Pm}>Today, 04:42 pm</div>
                    </div>
                  </div>
                  <div className={styles.groupParent1}>
                    <div className={styles.groupDiv}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle-31@2x.png"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-32.svg"
                      />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.groupChild1} />
                        <div className={styles.div1}>
                          <span>{`1:24 / `}</span>
                          <span className={styles.span}>53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recording0121Parent}>
                      <div className={styles.location}>Recording_0121</div>
                      <div className={styles.today0442Pm}>Today, 02:14 pm</div>
                    </div>
                  </div>
                  <div className={styles.groupParent1}>
                    <div className={styles.groupDiv}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle-31@2x.png"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-32.svg"
                      />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.groupChild1} />
                        <div className={styles.div1}>
                          <span>{`1:24 / `}</span>
                          <span className={styles.span}>53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recording0121Parent}>
                      <div className={styles.location}>Recording_0121</div>
                      <div className={styles.today0442Pm}>Today, 02:09 pm</div>
                    </div>
                  </div>
                  <div className={styles.groupParent1}>
                    <div className={styles.groupDiv}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle-31@2x.png"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-32.svg"
                      />
                      <div className={styles.rectangleParent1}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.groupChild1} />
                        <div className={styles.div1}>
                          <span>{`1:24 / `}</span>
                          <span className={styles.span}>53.30</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.recording0121Parent}>
                      <div className={styles.location}>Recording_0121</div>
                      <div className={styles.today0442Pm}>Today, 01:11 pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
