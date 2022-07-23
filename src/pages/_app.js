import { UserCtxProvider } from 'context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <UserCtxProvider>
    <Component {...pageProps} />
  </UserCtxProvider> 
)}

export default MyApp
