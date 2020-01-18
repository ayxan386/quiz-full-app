import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { checkTempAuthFrom } from "../../middlewares/IsAuth";
import { Redirect, Link } from "react-router-dom";

class StartPage extends React.Component {
  getSubject = () => {
    const pat = "/ss/";
    const url = window.location.href;
    const params = url.substring(url.indexOf(pat) + pat.length).split("/");
    return (params && params[0]) || "";
  };

  startTest = () => {
    return <Redirect></Redirect>;
  };

  render() {
    return checkTempAuthFrom(this.props.token) ? (
      <Redirect to={`/temp/form/${this.getSubject()}`}></Redirect>
    ) : (
      <>
        <Helmet>
          <title>Test Page</title>
        </Helmet>
        <div className='App row'>
          <div className='main-area jumbotron col-8 min-width'>
            <Link to={`/tt/${this.getSubject()}`}>
              <button className='btn btn-success'>Start the test</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, null)(StartPage);
