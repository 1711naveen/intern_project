import React from 'react'
import './Page.css'
import 'C:/Users/ynnav/OneDrive/Documents/nextjs/Project/intern_project/node_modules/bootstrap/dist/css/bootstrap.css'

const Page = () => {
  return (
    <div class="pages">
      <div class="camera-details">
        <div class="frame-parent">
          <div class="icbaseline-arrow-back-parent">
            <div class="icbaseline-arrow-back">
              <img class="vector-icon" alt="" src="./public/vector.svg" />
            </div>
            <div class="frame-group">
              <div class="vms-cameras-camera-details-parent">
                <div class="vms-cameras-container">
                  <span>
                    <b>VMS</b>
                  </span>
                  <span class="cameras-camera-details">
                    <span> / Cameras / </span>
                    <span class="camera-details1">Camera Details</span>
                  </span>
                </div>
                <div class="bank-entrance-front-view-camer">
                  Bank Entrance-front-view Camera1
                </div>
              </div>
              <div class="view-and-manage">
                View and manage camera details, recordings and connection
                details
              </div>
            </div>
          </div>
          <div class="group-parent">
            <div class="rectangle-parent">
              <div class="group-child"></div>
              <div class="filter-by">Filter by</div>
            </div>
            <div class="rectangle-group">
              <div class="group-item"></div>
              <div class="search">Search</div>
            </div>
            <div class="button">
              <div class="state-layer">
                <div class="label-text"><button type="button" class="btn btn-outline-primary">Edit Camera</button></div>
              </div>
            </div>
            <div class="button">
              <div class="state-layer">
                <div class="label-text"><button type="button" class="btn btn-outline-primary">Deactivate</button></div>
              </div>
            </div>
            <div class="button2">
              <div class="state-layer">
                <div class="label-text"><button type="button" class="btn btn-outline-primary">Delete Camera</button></div>
              </div>
            </div>
          </div>
        </div>
        <div class="camera-details-inner">
          <div class="frame-wrapper">
            <div class="frame-container">
              <div class="frame-div">
                <div class="bxvideo-recording-parent">
                  <img
                    class="bxvideo-recording-icon"
                    alt=""
                    src="./public/bxvideorecording.svg"
                  />

                  <div class="view-recorded-videos">View Recorded Videos</div>
                </div>
                <div class="bxvideo-recording-parent">
                  <img
                    class="bxvideo-recording-icon"
                    alt=""
                    src="./public/uimrefresh.svg"
                  />

                  <div class="view-recorded-videos">Refetch Camera</div>
                </div>
              </div>
              <div class="group-container">
                <div class="rectangle-container">
                  <img
                    class="group-inner"
                    alt=""
                    src="./public/first.png"
                  />

                  <div class="pm-parent">
                    <div class="pm">01/05/2023 02:42:21 PM</div>
                    <div class="location">Hall 01</div>
                  </div>
                </div>
                <div class="frame-wrapper1">
                  <div class="frame-parent1">
                    <div class="camera-details-parent">
                      <div class="camera-details2">Camera Details</div>
                      <div class="active-wrapper">
                        <div class="active">Active</div>
                      </div>
                    </div>
                    <div class="offline-alert-parent">
                      <div class="location-parent">
                        <div class="location">Location:</div>
                        <div class="coimbatore">Coimbatore</div>
                      </div>
                      <div class="location-parent">
                        <div class="location">City:</div>
                        <div class="delhi-india">Coimbatore</div>
                      </div>
                      <div class="location-parent">
                        <div class="location">Timezone:</div>
                        <div class="delhi-india">Delhi-India</div>
                      </div>
                      <div class="location-parent">
                        <div class="location">Date added:</div>
                        <div class="delhi-india">Aug 03, 2023 12:01:42 PM</div>
                      </div>
                      <div class="location-parent">
                        <div class="location">Last update:</div>
                        <div class="delhi-india">Aug 03, 2023 12:01:42 PM</div>
                      </div>
                    </div>
                    <div class="offline-alert-parent">
                      <div class="location-parent">
                        <div class="location">Manufacture details:</div>
                        <div class="coimbatore">ADT</div>
                      </div>
                      <div class="location-parent">
                        <div class="location">RTSP/HLS URL:</div>
                        <div class="copy-url">Copy URL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="camera-health-and-alert-parent">
                <div class="camera-health-and">Camera Health and Alert</div>
                <div class="frame-parent4">
                  <div class="frame-wrapper2">
                    <div class="frame-wrapper3">
                      <div class="offline-alert-parent">
                        <div class="offline-alert">Offline Alert</div>
                        <div class="if-camera-is">
                          If camera is continuously offline for
                        </div>
                        <div class="minutes">12 minutes</div>
                        <div class="send-an-email-to-parent">
                          <div class="send-an-email">Send an email to</div>
                          <div class="emailcom">email.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="frame-wrapper4">
                    <div class="frame-wrapper5">
                      <div class="offline-alert-parent">
                        <div class="location">Health Grade</div>
                        <div class="div">96%</div>
                        <div class="cheers-this-camera-had-no-off-parent">
                          <div class="cheers-this-camera">
                            Cheers, this camera had no offline time in the last
                            30 days
                          </div>
                          <div class="grade-a">Grade A</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="frame-wrapper4">
                    <div class="frame-wrapper7">
                      <div class="offline-alert-parent">
                        <div class="location">Health Logs</div>
                        <div class="today-0437-pm-activated-parent">
                          <div class="send-an-email">
                            Today, 04:37 pm: Activated
                          </div>
                          <div class="send-an-email">
                            23 Aug, 02:22 pm: Deactivated
                          </div>
                          <div class="send-an-email">
                            21 Aug, 05:12 am: Activated
                          </div>
                          <div class="send-an-email">
                            20 Aug, 02:12 am: Deactivated
                          </div>
                          <div class="send-an-email">
                            19 Aug, 02:12 am: Deactivated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="camera-health-and-alert-parent">
                <div class="recent-recordings-parent">
                  <div class="camera-health-and">Recent Recordings</div>
                  <div class="view-all">View All</div>
                </div>
                <div class="frame-parent6">
                  <div class="group-parent1">
                    <div class="group-div">
                      <img
                        class="rectangle-icon"
                        alt=""
                        src="./public/second.png"
                      />

                      <img
                        class="group-icon"
                        alt=""
                        src="./public/group-32.svg"
                      />

                      <div class="rectangle-parent1">
                        <div class="rectangle-div"></div>
                        <div class="group-child1"></div>
                        <div class="div1">
                          <span>1:24 / </span>
                          <span class="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div class="recording-0121-parent">
                      <div class="location">Recording_0121</div>
                      <div class="today-0442-pm">Today, 04:42 pm</div>
                    </div>
                  </div>
                  <div class="group-parent1">
                    <div class="group-div">
                      <img
                        class="rectangle-icon"
                        alt=""
                        src="./public/third.png"
                      />

                      <img
                        class="group-icon"
                        alt=""
                        src="./public/group-32.svg"
                      />

                      <div class="rectangle-parent1">
                        <div class="rectangle-div"></div>
                        <div class="group-child1"></div>
                        <div class="div1">
                          <span>1:24 / </span>
                          <span class="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div class="recording-0121-parent">
                      <div class="location">Recording_0121</div>
                      <div class="today-0442-pm">Today, 02:14 pm</div>
                    </div>
                  </div>
                  <div class="group-parent1">
                    <div class="group-div">
                      <img
                        class="rectangle-icon"
                        alt=""
                        src="./public/forth.png"
                      />

                      <img
                        class="group-icon"
                        alt=""
                        src="./public/group-32.svg"
                      />

                      <div class="rectangle-parent1">
                        <div class="rectangle-div"></div>
                        <div class="group-child1"></div>
                        <div class="div1">
                          <span>1:24 / </span>
                          <span class="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div class="recording-0121-parent">
                      <div class="location">Recording_0121</div>
                      <div class="today-0442-pm">Today, 02:09 pm</div>
                    </div>
                  </div>
                  <div class="group-parent1">
                    <div class="group-div">
                      <img
                        class="rectangle-icon"
                        alt=""
                        src="./public/fifth.png"
                      />

                      <img
                        class="group-icon"
                        alt=""
                        src="./public/group-32.svg"
                      />

                      <div class="rectangle-parent1">
                        <div class="rectangle-div"></div>
                        <div class="group-child1"></div>
                        <div class="div1">
                          <span>1:24 / </span>
                          <span class="span">53.30</span>
                        </div>
                      </div>
                    </div>
                    <div class="recording-0121-parent">
                      <div class="location">Recording_0121</div>
                      <div class="today-0442-pm">Today, 01:11 pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
