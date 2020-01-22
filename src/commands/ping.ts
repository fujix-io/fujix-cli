import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink';

const ping = (args: string[], flags: Args) => {
  return initInk('ping', args, flags);
};

export default ping;
