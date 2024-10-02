import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba <GiftExpertApp/>', () => { 
  test('probar renderizado de componetes', () => { 
    
    render(<GifExpertApp/>);
    screen.debug();

   })
 });
