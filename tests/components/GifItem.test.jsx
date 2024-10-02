import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Test de <GiftItem />", () => {
  const title = "un titulo";
  const url = "https://url.pruebas/";

  test("hacer mach con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
    
  });

  test('debe mostrar el titulo en el componente', () => { 
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
   })
});
