import React from "react"; // eslint-disable-next-line
import { isLoggedIn, currentUser, AuthButton } from "../../utils/netlifyAuth.js";
import * as Parser from "rss-parser";// eslint-disable-next-line
import styles from "./Dashboard.scss";


let parser = new Parser();

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: {}) {
    super(props);
    this.state = { feed: [] };
  }

  async componentDidMount() {
    const feed = await parser.parseURL("https://www.reddit.com/.rss");
    console.log(feed);
    this.setState({ feed });
  }

  render() {
    return (
      <>
        <div className="row widget-grid col-12">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 flex-widget">
            <div className="widget-card"></div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 flex-widget">
            <div className="widget-card"></div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 flex-widget">
            <div className="widget-card"></div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 flex-widget">
            <div className="widget-card"></div>
          </div>
        </div>

        {/* <div>
          {this.state.feed &&
            this.state.feed.map((item, i) => (
              <div key={i}>
                <h2>item.title</h2>
                <a>item.link</a>
              </div>
            ))}
        </div> */}
      </>
    );
  }
}