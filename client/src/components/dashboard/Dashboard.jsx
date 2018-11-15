import React, { PureComponent } from 'react';
//  libs
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { Link } from 'react-router-dom';
//  components
import ProfileActions from './ProfileActions';
import Spinner from '../common/Spinner';
//  actions
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';

class Dashboard extends PureComponent {
  static propTypes = {
    getCurrentProfile: func,
    deleteAccount: func,
    profile: object,
    auth: object
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome,{' '}
              <Link to={`/profile/${profile.handle}`}>{user.name}!</Link>
            </p>
            <ProfileActions />
            {/* TODO: exp and edu */}
            <div style={{ marginBottom: '60px' }} />
            <button onClick={this.onDeleteClick} className="btn btn-danger">
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in, but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome, {user.name}!</p>
            <p>You have not yet setup a profile, please add some info.</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
