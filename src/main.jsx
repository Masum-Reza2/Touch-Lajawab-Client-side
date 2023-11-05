import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import ControlRoom from './ControlRoom/ControlRoom.jsx'

// tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ControlRoom>
        <RouterProvider router={Router} />
      </ControlRoom>
    </QueryClientProvider>

  </React.StrictMode>,
)