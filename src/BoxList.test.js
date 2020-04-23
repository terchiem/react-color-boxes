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
  let renderedBoxList;

  beforeEach(function () {
    renderedBoxList = render(<BoxList />);
    const widthInput = renderedBoxList.getByLabelText("Width:");
    const heightInput = renderedBoxList.getByLabelText("Height:");
    const backgroundColorInput = renderedBoxList.getByLabelText("Background Color:");
    const submitBtn = renderedBoxList.queryByText("Add Box");

    fireEvent.change(widthInput, { target: { value: "100" }});
    fireEvent.change(heightInput, { target: { value: "100" }});
    fireEvent.change(backgroundColorInput, { target: { value: "blue" }});
    fireEvent.click(submitBtn);
  })

  it("can add a new box", function() {
    const removeBtn = renderedBoxList.queryByText("x");
    expect(removeBtn).toBeInTheDocument();
  })
  
  it("can remove an existing box", function () {
    const removeBtn = renderedBoxList.queryByText("x");
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
  })
})