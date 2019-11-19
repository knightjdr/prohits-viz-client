import React, { Suspense } from 'react';
import { useRoutes } from 'hookrouter';

import Loading from './loading';
import NotFoundPage from './not-found';
import routes from './routes';

const Routing = () => {
  const routeResult = useRoutes(routes);

  return (
    <Suspense fallback={<Loading />}>
      { routeResult || <NotFoundPage /> }
    </Suspense>
  );
};

export default Routing;
