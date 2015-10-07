'use strict';

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');

import $ from 'jquery';
import * as RX from 'rx-ui';
import React from 'react/addons';
import * as ReactBootstrap from 'react-bootstrap';

var dropdownItems = [
  {
    name: "sign out",
    href: "#"
  },
  {
    name: "profile",
    href: "#"
  }
];

var sidebarItems = [
  {
    name: "something 1",
    href: "#"
  },
  {
    name: "something 2",
    href: "#"
  },
  {
    name: "something 3",
    href: "#"
  }
];

$(document).ready(function() {
  // define routing

  React.render(
    <RX.Layout projectName="Hello" sidebarItems={sidebarItems} dropdownItems={ dropdownItems }/>, 
    document.getElementById('layout-container')
  );

  // RX.start();
  // console.log("Layout", RX.Layout);
});
