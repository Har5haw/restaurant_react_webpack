import { render } from "@testing-library/react";
import UserDetails from ".";
import React from "react";

describe("user details test", () => {
    it("render", () => {
        const logout = jest.fn();
        const profileClick = jest.fn();
        const wrapper = render(
            <UserDetails
                logout={logout}
                profileClick={profileClick}
                user={{ name: "shaw" }}
            />
        );

        expect(wrapper).toBeDefined();

        expect(wrapper.queryByText("shaw")).toBeInTheDocument();
    });
});
