import React from "react";
import * as Parser from "rss-parser";// eslint-disable-next-line
import styles from "./Dashboard.scss";


import CircularProgress from "@material-ui/core/CircularProgress";

import { FaRunning, FaRegCalendarAlt, FaCloudSunRain, FaRegNewspaper, FaBriefcase, FaComments, FaExclamation, FaParking, FaRegQuestionCircle, FaFileArchive, FaRoad, FaGavel, FaChevronRight} from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";

import ColouredCard from "./../ColouredCard";

import Weather from "./../Weather";
import Footer from "./../Footer";


let parser = new Parser();
const guelphURL = "https://guelph.ca";

var now = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var day = days[now.getDay()];
var month = months[now.getMonth()];

export default class Dashboard extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { eventsfeed: [], newsfeed: [], noticefeed: [], seasonalfeed: [], jobfeed: [], engagementfeed: [] };
  }

  async componentDidMount() {
    const eventsfeed = await parser.parseURL("https://devguelphca.wpengine.com/events/feed/");
    this.setState({ eventsfeed });

    const newsfeed = await parser.parseURL(guelphURL + "/feed/?newstype=news-release");
    this.setState({ newsfeed });

    const noticefeed = await parser.parseURL(guelphURL + "/feed/?newstype=public-notice");
    this.setState({ noticefeed });

    const seasonalfeed = await parser.parseURL(guelphURL + "/feed/?post_type=seasonal");
    this.setState({ seasonalfeed });

    const jobfeed = await parser.parseURL(guelphURL + "/feed/?post_type=job-posting");
    this.setState({ jobfeed });

    const engagementfeed = await parser.parseURL(guelphURL + "/feed/?newstype=have-your-say");
    this.setState({ engagementfeed });
  }



  render() {
    return (
      <>
      <div className="welcomeMessage">{day}, {month} {now.getDay()}<div className="weatherMessage">21.6°C</div></div>
        <div className="row widget-grid col-12">
          <Weather></Weather>
          <ColouredCard
            color="#31a7d3"
            title="Programs and activities"
            icon={<FaRunning />}
          >
            <div className="alignLeft">
              <p>
                Swimming lesson registration for outdoor pools is now open.
                <a href="/"> Register early </a>
                before spots fill!
              </p>
              <p>
                <a
                  title="Open new window to view pools webpage"
                  href={guelphURL + "/seasonal/outdoor-pools-splash-pads/"}
                >
                  Outdoor pools
                </a>{" "}
                are open.
              </p>
              <p>
                <a href="/">View all programs and activities</a>
              </p>
            </div>
          </ColouredCard>
          <ColouredCard color="#4f87cb" title="News" icon={<FaRegNewspaper />}>
            {this.state.newsfeed.items ? (
              <>
                {this.state.newsfeed.items.map((item, i) => (
                  <div className="listingborder" key={i}>
                    <a href={item.link}>{item.title}</a>
                  </div>
                ))}
                <a href={guelphURL + "/newstype/news-release/"}>
                  View more news
                </a>
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>
          <ColouredCard
            color="#4bc6b1"
            title="Public Notices"
            icon={<GoMegaphone />}
          >
            {this.state.noticefeed.items ? (
              <>
                {this.state.noticefeed.items.map((item, i) => (
                  <div className="listingborder" key={i}>
                    <a href={item.link}>{item.title}</a>
                  </div>
                ))}
                <a href={guelphURL + "/newstype/public-notice/"}>
                  View more public notices
                </a>
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>

          <ColouredCard
            color="#f0483e"
            title="Events"
            icon={<FaRegCalendarAlt />}
          >
            {this.state.eventsfeed.items ? (
              <>
                {this.state.eventsfeed.items.length === 0 ? (
                  <>
                    <p>There are no upcoming events</p>
                    <a href={guelphURL + "/events"}>View events calendar</a>
                  </>
                ) : (
                  <>
                    {this.state.eventsfeed.items.map((item, i) => (
                      <div className="listingborder" key={i}>
                        <a href={item.link}>{item.title}</a>
                        <p>{item.pubDate}</p>
                      </div>
                    ))}
                    <a href={guelphURL + "/events"}>View more events</a>
                  </>
                )}
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>
          <ColouredCard
            color="#d5861a"
            title="Seasonal information"
            icon={<FaCloudSunRain />}
          >
            {this.state.seasonalfeed.items ? (
              <>
                {this.state.seasonalfeed.items.length === 0 ? (
                  <>
                    <p>There is no seasonal information currently available</p>
                  </>
                ) : (
                  <>
                    {this.state.seasonalfeed.items.map((item, i) => (
                      <div className="listingborder" key={i}>
                        <a href={item.link}>{item.title}</a>
                      </div>
                    ))}
                    <a href={guelphURL + "/living/seasonal-information/"}>
                      View more seasonal information
                    </a>
                  </>
                )}
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>
          <ColouredCard
            color="#db474c"
            title="Council meetings and agenda"
            icon={<FaGavel />}
          >
            <a href={guelphURL + "/city-hall/mayor-and-council/city-council/agendas-and-minutes/"}>
              View agenda <FaChevronRight />
            </a>

            <p></p>
            <a href={guelphURL + "/news/live/"}>
              Watch meeting <FaChevronRight />
            </a>
          </ColouredCard>
          <ColouredCard
            color="#db474c"
            title="Job opportunities"
            icon={<FaBriefcase />}
          >
            {this.state.jobfeed.items ? (
              <>
                {this.state.jobfeed.items.length === 0 ? (
                  <>
                    <p>There is no job opportunities currently available</p>
                  </>
                ) : (
                  <>
                    <p>We’re hiring for the following positions:</p>
                    <ul className="listing-list">
                      {this.state.jobfeed.items.map((item, i) => (
                        <li key={i}>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                    <a href={guelphURL + "/employment-careers/careers-jobs/"}>
                      View all job opportunities
                    </a>
                  </>
                )}
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>
          <ColouredCard
            color="#e59d29"
            title="Engagement opportunities"
            icon={<FaComments />}
          >
            {this.state.engagementfeed.items ? (
              <>
                {this.state.engagementfeed.items.length === 0 ? (
                  <>
                    <p>There is no engagement opportunities currently available</p>
                  </>
                ) : (
                  <>
                    <p>
                      Have your say! We want to hear from you on these topics:
                    </p>
                    <ul className="listing-list">
                      {this.state.engagementfeed.items.map((item, i) => (
                        <li key={i}>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Follow all engagement opportunities on{" "}
                      <a href="https://www.haveyoursay.guelph.ca/">
                        Have Your Say Guelph
                      </a>
                    </p>
                  </>
                )}
              </>
            ) : (
              <div className="loading-icon">
                <CircularProgress size={100} />
              </div>
            )}
          </ColouredCard>
          <ColouredCard
            color="#673ab7"
            title="Marriage applications"
            icon={<FaFileArchive />}
          >
            <p>You can apply for:</p>
            <ul className="listing-list">
              <li>
                  <a href="https://forms.guelph.ca/ServiceGuelph/Marriage-Licence-Application">
                    Marriage Application Licence
                  </a>
              </li>
              <li>
                  <a href="https://forms.guelph.ca/ServiceGuelph/Additional-marriage-licence-documents">
                    Additional Marriage Application Licence
                  </a>
              </li>
            </ul>
          </ColouredCard>
          <ColouredCard color="#9e9e9e" title="Road closures" icon={<FaRoad />}>
            <p>
              Check the latest update on City of Guelph &nbsp;
              <a href="https://www.google.com/maps/d/viewer?mid=1j51wycPGHyD_1h8Y88CHfOIVdlw&ll=43.53460614358765%2C-80.23371139999999&z=12">
                road closures
              </a>
              .
            </p>
          </ColouredCard>
          <ColouredCard
            color="#0d675d"
            title="Report a problem"
            icon={<FaExclamation />}
          >
            <p>
              We’re here for you 24/7. Report a city problem online. We’re
              working on this widget.
            </p>
            <p>
              Check back soon for new and exciting updates to our online report
              a problem tool.
            </p>
            <a href="https://cityofguelph.maps.arcgis.com/apps/CrowdsourceReporter/index.html?appid=bb032c2d08dd435986d5008f2cfa7ab6">
              Report a problem <FaChevronRight />
            </a>
          </ColouredCard>
          <ColouredCard color="#e5cf29" title="Parking" icon={<FaParking />}>
            <a href="https://parkingguelph.aimsparking.com/">
              Pay a parking ticket <FaChevronRight />
            </a>
            <p></p>
            <p>
              Overnight on-street parking is not permitted downtown. Downtown
              residents are encouraged to use municipal parking lots to
              accommodate guests.
            </p>
            <p>
              Do not leave a vehicle parked for more than 48 consecutive hours
              on any street or in the East or West Parkades.
            </p>
            <p>
              On-street parking is restricted from December 1 to April 1 to
              allow for snow removal and emergency vehicles. Short-term
              <a href="https://parkingguelph.aimsparking.com/">
                on-street exemption permits
              </a>
              are available for residents outside the downtown area.
            </p>
          </ColouredCard>
          <ColouredCard
            color="#21b352"
            title="MyGuelph support"
            icon={<FaRegQuestionCircle />}
          >
            <p>
              If you have technical questions about MyGuelph, please email&nbsp;
              <a href="mailto:myguelph@guelph.ca">myguelph@guelph.ca</a>.
            </p>
            <p>
              For all other city-related questions, please call the the City of
              Guelph at 519-826-9771 or email&nbsp;
              <a href="mailto:info@guelph.ca">info@guelph.ca</a>.
            </p>
          </ColouredCard>
        </div>
        <Footer />
      </>
    );
  }
}