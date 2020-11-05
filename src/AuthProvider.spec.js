import React from "react"
import { render } from "@testing-library/react"
import { AuthProvider, AuthContext } from "./AuthProvider"

describe("AuthProvider", () => {
    it("authed is false by default", () => {
        const { getByText } = render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => (
                        <span>Is logged in: {value.authed.toString()}</span>
                    )}
                </AuthContext.Consumer>
            </AuthProvider>
        )

        expect(getByText("Is logged in: false")).toBeTruthy()
    })

    describe(".login", () => {
        it.todo("sets authed to true")
    })
    describe(".logout", () => {
        it.todo("sets authed to false")
    })
})
