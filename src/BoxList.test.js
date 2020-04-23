import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';



it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})



describe("adding/removing boxes", function () {
  let renderedBox;

  beforeEach(function () {
    renderedBox = render(<BoxList />);
    const widthInput = renderedBox.getByLabelText("Width:");
    const heightInput = renderedBox.getByLabelText("Height:");
    const backgroundColorInput = renderedBox.getByLabelText("Background Color:");
    const submitBtn = renderedBox.queryByText("Add Box");

    fireEvent.change(widthInput, { target: { value: "100" }});
    fireEvent.change(heightInput, { target: { value: "100" }});
    fireEvent.change(backgroundColorInput, { target: { value: "blue" }});
    fireEvent.click(submitBtn);
  })

  it("can add a new box", function() {
    // expect a box with a remove button
    expect(renderedBox.queryByText("x")).toBeInTheDocument();
  })
  
  it("can remove an existing box", function () {
    const removeBtn = renderedBox.queryByText("x");
    fireEvent.click(removeBtn);
    expect(renderedBox.queryByText("x")).not.toBeInTheDocument();
  })
})