import React from "react";
import Root from "../../components/Root";
import { expect } from "../test_helper";

describe("Root", () => {
  const component = <Root />;

  it("renders", () => {
    expect(component).to.exist;
  });
});
