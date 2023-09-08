import { Home } from './view/pages/Home';
import { HomeProvider } from './view/pages/Home/components/HomeContext';

export function App() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
