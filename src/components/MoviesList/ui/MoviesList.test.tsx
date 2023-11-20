import { act, render, screen, waitFor } from "@testing-library/react";
import { createReduxStore } from "providers/StoreProvider/config/store";
import { Provider } from "react-redux";
import { MoviesList } from "./MoviesList";
import { MoviesListActions } from "../model/slice/moviesSlice";
import { MemoryRouter } from "react-router-dom";

describe("MoviesList test", () => {
  const store = createReduxStore();
  test("movie list render and pagination render test", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </MemoryRouter>
    );
    act(() => {
      store.dispatch(MoviesListActions.testChangeIsLoading(false));
      store.dispatch(MoviesListActions.changeMovies([{ Title: "Terminator" }]));
    });

    await waitFor(() => {
      expect(screen.queryByTestId("preloader")).toBeNull();
    });

    expect(screen.getByText("Terminator")).toBeInTheDocument();
    expect(screen.getByRole("pagination")).toBeInTheDocument();
  });

  test("component loading test", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("component error test", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </MemoryRouter>
    );
    act(() => {
      store.dispatch(MoviesListActions.testChangeIsLoading(false));
      store.dispatch(MoviesListActions.changeMovies(undefined));
    });

    await waitFor(() => {
      expect(screen.queryByTestId("preloader")).toBeNull();
    });

    expect(screen.getByText("Movies not Found")).toBeInTheDocument();
  });
});
