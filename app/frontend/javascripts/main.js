'use strict';

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');

import * as RX from 'rx-theme';
import $ from 'jquery';
import React from 'react/addons';
import * as ReactBootstrap from 'react-bootstrap';

$(document).ready(function() {
  // define routing

  React.render(
    <RX.Layout/>, 
    document.getElementById('layout-container')
  );

  // RX.start();
  // console.log("Layout", RX.Layout);
});
