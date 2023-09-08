import { Toaster } from 'react-hot-toast';
import { Home } from './view/pages/Home';
import { HomeProvider } from './view/pages/Home/components/HomeContext';

export function App() {
  return (
    <HomeProvider>
      <Home />
      <Toaster
        position="top-center"
        toastOptions={{ duration: 2000 }}
      />
    </HomeProvider>
  );
}
