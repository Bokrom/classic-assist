import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/layouts/site/site.js';

import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/body1/body1.js';
import '../../ui/pages/body2/body2.js';


// Set up all routes in the app
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/body1', {
  name: 'body1',
  action() {
    BlazeLayout.render('siteLayout', { siteMain: 'body1' })
  },
});

FlowRouter.route('/body2', {
  name: 'body2',
  action() {
    BlazeLayout.render('siteLayout', { siteMain: 'body2' })
  },
});
