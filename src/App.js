import React, { Suspense } from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Content from "./common_components/Content";
import DefaultLayout from "./common_components/DefaultLayout";
import Spinner from "./common_components/Spinner";
import './App.scss';
import Notiflix, { Notify } from "notiflix";

const millisecondsInSeconds = 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: (1 * millisecondsInSeconds), // 1 seconds
      cacheTime: (1 * millisecondsInSeconds), // 1 seconds
      retryDelay: attemptIndex => Math.min(Math.pow(millisecondsInSeconds * 2, attemptIndex), (30 * millisecondsInSeconds)), // double (starting at 1000ms) with each attempt, but not exceed 30 seconds,
      refetchOnWindowFocus: false
    },
  }
});

// #region Notiflix global settings.
Notify.init({
  position: 'center-top',
  closeButton: false,
  clickToClose: true,
  pauseOnHover: true
});

Notiflix.Confirm.init({
  width: "300px",
  distance: '10px',
});

// #endregion

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <DefaultLayout />
            </Suspense>
          </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;