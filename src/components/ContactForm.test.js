import React from "react";
import { render, fireEvent, findAllByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Renders contact form without crashing", () => {
    render(<ContactForm/>);
});

test("Form adds new users to the user list", () => {
    const { getByLabelText, findAllByText, getByText, getByTestId } = render(<ContactForm/>);
    const firstNameInput = getByLabelText(/first name*/i);
    const lastNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message*/i);

    fireEvent.change(firstNameInput, { target: { name: "firstname", value: "Jay"}});
    fireEvent.change(lastNameInput, { target: { name: "lastname", value: "Polk"}});
    fireEvent.change(emailInput, { target: { name: "email", value: "swag@swag.com"}});
    fireEvent.change(messageInput, { target: { name: "message", value: "Blah"}});

    const submitButton = getByTestId(/submit/i);

    fireEvent.click(submitButton);

    findAllByText(/Jay/i);
})

test("Show error if required field is missing when submitting", () => {
    const { getByTestId } = render(<ContactForm/>);
    const submitButton = getByTestId(/submit/i);
    fireEvent.click(submitButton);
    findAllByText(/looks like there was an error/i);
})

