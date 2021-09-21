import { render, screen } from "@testing-library/react";
import Footer from "../components/organisms/Footer"


describe('Footer', () => {

    it('should say Footer phrase', () => {
        render(<Footer/>)
        expect(
            screen.getByRole("heading", { name: "Welcome to Next.js!" })
        ).toBeTruthy()
    });
    
})
