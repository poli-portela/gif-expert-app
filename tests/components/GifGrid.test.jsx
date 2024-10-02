import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGif } from "../../src/hooks/useFetchGif";


jest.mock("../../src/hooks/useFetchGif");

describe("Pruebas <GiftGrid/>", () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  test("Debe mostrar loading inicialmente", () => {
    const category = "One Punch";

    useFetchGif.mockReturnValue({
        images: [],
        isLoading: true,
      });

    render(<GifGrid category={category} />);
    const input = screen.getByText("Cargando...");
    expect(input).toBeTruthy();
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuendo se cargana las imagenes useFetchGifs", () => {
    

    const category = "One Punch";
    const mockImages = [
      { id: "1", title: "Test Gif 1", url: "https://example.com/test1.gif" },
      { id: "2", title: "Test Gif 2", url: "https://example.com/test2.gif" },
    ];
    useFetchGif.mockReturnValue({
        images: mockImages,
        isLoading: false,
      });
    // Act: Render the component
    const { getByText } = render(<GifGrid category={category} />);

    // Assert: Check if images are rendered
    expect(screen.getByText(category)).toBeInTheDocument;
    expect(screen.getByText('Test Gif 1')).toBeInTheDocument;
    expect(screen.getByText('Test Gif 2')).toBeInTheDocument;
    expect(screen.getByRole('img', { name: 'Test Gif 1' })).toBeInTheDocument;
    expect(screen.getByRole('img', { name: 'Test Gif 2' })).toBeInTheDocument;
  });
});
