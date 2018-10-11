// Import client startup through a single index entry point

// Imports for Materialize
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css';
global.M = global.Materialize = Materialize;

// Imports routes
import './routes.js';
