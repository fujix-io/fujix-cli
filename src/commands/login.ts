import initInk from '../components/common/init-ink';
import { FlagsType } from '..';

const login = (args: string[], flags: FlagsType) => {
  return initInk('login', args, flags);
};

export default login;
