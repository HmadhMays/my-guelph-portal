import React from "react";// eslint-disable-next-line
import styles from "./ColouredCard.scss";

export default class Dashboard extends React.Component<Props> {

  render() {
    return (
      <>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 p-0 flex-widget">
            <div className="widget-card" style={{ borderColor: this.props.color }}>
                <div className="widget-card-body">
                    <div className="widget-card-header">
                        <div className="widget-card-header-icon" style={{ background: this.props.color }}>
                            {this.props.icon}
                        </div>
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="widget-card-content">
                        {this.props.children}
                    </div>
                    
                </div>
            </div>
        </div>
      </>
    );
  }
}