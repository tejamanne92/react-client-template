import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from './views/login/login.container';
import SignupContainer from './views/signup/signup.container';
import DashboardContainer from './views/dashboard/dashboard.container';
import EventsContainer from './views/events/events.container';
import GalleryContainer from './views/gallery/gallery.container';
import ExpensesContainer from './views/expenses/expenses.container';
import GroupExpensesContainer from './views/expenses/group-expenses.container';
import IndividualExpensesContainer from './views/expenses/individual-expenses.container';
import ReportsContainer from './views/reports/reports.container';
import MaintenanceContainer from './views/maintenance/maintenance.container';
import SettingsContainer from './views/settings/settings.container';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app full-height">
        <div className={this.setAppMainViewClass()}>
          <header className="app-header">
            <div className="app-header-menu-dock">
              <nav className="navbar navbar-expand">
                <a className="navbar-brand" href="#">React Client Template</a>
                <ul className="navbar-nav">
                  <li className={this.setNavItemClass('/dashboard')}>
                    <Link className="nav-link" to={{ pathname: '/dashboard', hash: '#' }}>Dashboard</Link>
                  </li>
                  <li className={this.setNavItemClass('/events')}>
                    <Link className="nav-link" to={{ pathname: '/events', hash: '#' }}>Events</Link>
                  </li>
                  <li className={this.setNavItemClass('/gallery')}>
                    <Link className="nav-link" to={{ pathname: '/gallery', hash: '#' }}>Gallery</Link>
                  </li>
                  <li className={this.setNavItemClass('/expenses')}>
                    <Link className="nav-link" to={{ pathname: '/expenses', hash: '#' }}>Expenses</Link>
                  </li>
                  <li className={this.setNavItemClass('/reports')}>
                    <Link className="nav-link" to={{ pathname: '/reports', hash: '#' }}>Reports</Link>
                  </li>
                  <li className={this.setNavItemClass('/maintenance')}>
                    <Link className="nav-link" to={{ pathname: '/maintenance', hash: '#' }}>Maintainance</Link>
                  </li>
                  <li className={this.setNavItemClass('/settings')}>
                    <Link className="nav-link" to={{ pathname: '/settings', hash: '#' }}>Settings</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="app-header-settings-dock">
              <Link className="float-right menu-anchor-btn" to={{ pathname: "/login" }}><i className="fa fa-sign-in app-icon" aria-hidden="true"></i>
                Sign In</Link>
              <div class="float-right menu-anchor-btn">
                <a class="bdropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-user app-icon" aria-hidden="true"></i>Teja Manne
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <Link class="dropdown-item" to={{ pathname: "/login" }}>Settings</Link>
                  <Link class="dropdown-item" to={{ pathname: "/login" }}>Logout</Link>
                </div>
              </div>
            </div>
          </header>
          <div className="view-scroll-container">
            <Route exact component={DashboardContainer} path="/dashboard" />
            <Route exact component={EventsContainer} path="/events" />
            <Route exact component={GalleryContainer} path="/gallery" />
            <Route exact component={ExpensesContainer} path="/expenses" />
            <Route exact component={GroupExpensesContainer} path="/expenses/groups"/>
            <Route exact component={ReportsContainer} path="/reports" />
            <Route exact component={MaintenanceContainer} path="/maintenance" />
            <Route exact component={SettingsContainer} path="/settings" />
          </div>
        </div>
        <Route component={LoginContainer} path="/login" />
        <Route component={SignupContainer} path="/signup" />
      </div>
    );
  }

  setAppMainViewClass = () => {
    return (this.props.location.pathname.includes('/login') || this.props.location.pathname.includes('/signup'))
      ? 'display-none' : 'app-main-view';
  }

  setNavItemClass = nav => {
    return this.props.location.pathname.includes(nav) ? 'nav-item active' : 'nav-item';
  }
}

export default App;
