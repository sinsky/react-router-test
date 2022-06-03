import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import App from './App'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
)
