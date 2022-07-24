import { UserCtxProvider } from 'context/UserContext'
import 'styles/resetStyles.scss'
import 'styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <UserCtxProvider>
    <Component {...pageProps} />
  </UserCtxProvider> 
)}

export default MyApp
