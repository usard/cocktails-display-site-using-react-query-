import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HomeLayout, Landing, About, NewsLetter, Error, SingleCocktail } from './pages';
import {loader as homeLayoutLoader } from './pages/HomeLayout';
import {loader as singleCocktailLoader} from './pages/SingleCocktail';
import {action as newsLetterAction} from './pages/NewsLetter';
import SinglePageError from './pages/SinglePageError';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  }
},);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        errorElement: <SinglePageError />,
        loader: homeLayoutLoader(queryClient),
        element: <HomeLayout />,
      },
      {
        path:  'about',
        element:  <About />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        errorElement: <SinglePageError />,
        element: <NewsLetter />,
        action: newsLetterAction,
      },
      {
        path:'cocktail/:id',
        element: <SingleCocktail />,
        loader: singleCocktailLoader(queryClient),
        errorElement: <SinglePageError />,

      }
    ],
  },
  // {
  //   path: '*',
  //   element: <Error />, 
  // }
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
    </QueryClientProvider>
  )
};

export default App;
