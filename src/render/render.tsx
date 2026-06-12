import { lazy, Suspense } from 'react';
import { pages } from '#lib/pages';
import { useNavigation } from '../context/navigationContext';

const Setup = lazy(() => import('../pages/setup-page/setup-page'));

type PageName = typeof pages[number];

const pageComponents: Record<PageName, React.ComponentType> = {
  setup: Setup,
};

const Render = () => {
  const { currentPage } = useNavigation();

  const Component = pageComponents[currentPage as PageName];
  
  if (!Component) {
      return <div>Page not found: {currentPage}</div>;
  }

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
  );
};

export default Render;
