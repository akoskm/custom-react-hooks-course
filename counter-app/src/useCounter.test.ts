import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter hook", () => {
  it("should initialize counter correctly", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.counter).toBe(10);
  });

  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(4);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(() => useCounter(6));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(5);
  });

  it("should reset the counter", () => {
    const { result } = renderHook(() => useCounter(4));
    act(() => {
      result.current.decrement();
      result.current.reset();
    });
    expect(result.current.counter).toBe(4);
  });
});
