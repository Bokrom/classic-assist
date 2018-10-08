import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import templates
import '../../ui/layouts/app/app.js';

// Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/search/search.js';
import '../../ui/pages/talents/talents.js';


//==ROUTE NOT FOUND==//
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_layout', { App_main: 'App_notFound' });
  },
};

//==HOME==//
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_layout', { App_main: 'App_home' });
  },
});

//==SEARCH==//
FlowRouter.route('/search', {
  name: 'App.search',
  action() {
    BlazeLayout.render('App_layout', { App_main: 'App_search' })
  },
});

//==TALENTS==//
FlowRouter.route('/talents', {
  name: 'App.talents',
  action() {
    BlazeLayout.render('App_layout', { App_main: 'App_talents' })
  },
});
