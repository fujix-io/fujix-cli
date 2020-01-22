import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';

const login = (args: string[], flags: Args) => {
  return initInk('login', args, flags);
};

export default login;
