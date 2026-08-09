import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// jsdom's own localStorage needs a real origin to activate, and on some
// Node versions a native (but non-functional without --localstorage-file)
// global `localStorage` shadows it entirely. A small in-memory Storage
// polyfill sidesteps both, independent of Node/jsdom version behavior.
class MemoryStorage implements Storage {
  #store = new Map<string, string>();

  get length() {
    return this.#store.size;
  }

  clear() {
    this.#store.clear();
  }

  getItem(key: string) {
    return this.#store.has(key) ? this.#store.get(key)! : null;
  }

  key(index: number) {
    return Array.from(this.#store.keys())[index] ?? null;
  }

  removeItem(key: string) {
    this.#store.delete(key);
  }

  setItem(key: string, value: string) {
    this.#store.set(key, String(value));
  }
}

Object.defineProperty(window, "localStorage", {
  value: new MemoryStorage(),
  writable: true,
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
