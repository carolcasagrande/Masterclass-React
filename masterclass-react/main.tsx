import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>, 
)

// children é o conteúdo dentro de cada tag (principal propriedade nativa do react)
// TS - ferramenta de tipagem estática para JS
// Tipagem estática: mecanismo para evitar erros enquanto a gente ta desenvolvendo o nosso app
// ForEach não tem retorno, por isso usar o map
