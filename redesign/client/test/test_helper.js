import _$ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import ReactTestUtils from "react-dom/test-utils";
import { JSDOM } from "jsdom";
import chai, { expect } from "chai";
import chaiJquery from "chai-jquery";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state)}>
      <MemoryRouter>
        <ComponentClass {...props} />
      </MemoryRouter>
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  ReactTestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
