import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Test Cases for Contact Us Page", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside Contact component", () => {
    render(<Contact />);

    //Querying
    const inputName = screen.getByPlaceholderText("Your Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 3 input inside Contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
