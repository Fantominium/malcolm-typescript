import { render } from "@testing-library/react";
import Footer from "../components/organisms/Footer"


describe('Footer', () => {


    it('should say Footer phrase', () => {

        const {container} = render(<Footer/>)
        const phrase = container("I'm here to stay (Footer)")
        expect(phrase).toBeTruthy()
    });
    
})
