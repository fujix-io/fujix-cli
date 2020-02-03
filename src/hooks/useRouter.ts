import { useContext } from 'react';
import * as Router from '../components/router/Router';

const useRouter = (): Router.RouterContextClass => {
  const ctx = useContext(Router.RouterContext);

  return ctx;
};

export default useRouter;
