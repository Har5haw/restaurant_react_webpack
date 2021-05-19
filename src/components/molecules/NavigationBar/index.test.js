import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from ".";
import React from "react";
import { Box } from "@material-ui/core";

describe("Navigation Bar", () => {
    it("render navigation bar", () => {
        const mockFun = jest.fn();
        const wrapper = render(<NavigationBar />);
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("ZeMoSo Restaurant")).toBeInTheDocument();
    });

    it("render Right details", () => {
        const wrapper = render(
            <NavigationBar rightComponent={<Box>{"Shaw"}</Box>} />
        );
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("ZeMoSo Restaurant")).toBeInTheDocument();
        expect(screen.queryByText("Shaw")).toBeInTheDocument();
    });
});
