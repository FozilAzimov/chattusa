import HomeContext from './Home';

export default function Context ({ children }) {
  return <HomeContext>
    {children}
  </HomeContext>
}
