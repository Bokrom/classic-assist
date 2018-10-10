// Client entry point, imports all client code
import '/imports/startup/client';
import '/imports/startup/both';

import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css';
global.M = global.Materialize = Materialize;
