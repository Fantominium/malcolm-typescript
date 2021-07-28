import { render } from "@testing-library/react";
import Footer from "../components/organisms/Footer"


describe('Footer', () => {

    it('should say Footer phrase', () => {

        const phrase:string = "I'm here to stay (Footer)"
        const {queryByPlaceholderText} = render(<Footer/>)
        expect(queryByPlaceholderText(phrase)).toBeTruthy()
    });
    
})
