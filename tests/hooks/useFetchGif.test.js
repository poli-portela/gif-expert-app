import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe("Pruebas en el Hook useFetchGif", () => {
  test("debe devolver el estado inicial", () => {
    const categoria = "One Punch";

    const {result} = renderHook(() => useFetchGif(categoria));
    const {images, isLoading } = result.current;
    expect( images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe devolver el estado inicial", async() => {
    const categoria = "One Punch";
    const {result} = renderHook(() => useFetchGif(categoria));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    
    const {images, isLoading } = result.current;
    expect( images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
