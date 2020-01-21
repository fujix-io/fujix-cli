import { Args } from '../components/context/AppContext';
import initInk from '../components/common/init-ink'

const help = (args: string[], flags: Args) => {
  return initInk('help', args, flags);
}

export default help;
