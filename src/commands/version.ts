import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';

const version = (args: string[], flags: Args) => {
  return initInk('version', args, flags);
};

export default version;
