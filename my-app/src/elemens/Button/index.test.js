import React from "react";
import { reder } from "@testing-library/react";
import Button from '../Button/index'
import { render } from "node-sass";
import { renderIntoDocument } from "react-dom/test-utils";

test("Should not allowed click button if isDisabled is present", () => {
            const { container } = render( < Button isDisabled > < /Button>)

                expect(container.querySelector('span.disabled')).toBeInTheDocument()
            })