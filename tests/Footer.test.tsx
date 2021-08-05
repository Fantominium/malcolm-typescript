import { render, screen } from "@testing-library/react";
import Footer from "../components/organisms/Footer"


describe('Footer', () => {

    it('should say Footer phrase', () => {

        render(<Footer/>)
        const phrase:string = "I'm here to stay (Footer)"
        // const {queryByPlaceholderText} = render(<Footer/>)
        expect(
            screen.getByRole("heading", { name: "Welcome to Next.js!" })
        ).toBeTruthy()
    });
    
})
