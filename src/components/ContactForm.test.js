import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Render Contact Form", () => {
    render(<ContactForm/>);
});