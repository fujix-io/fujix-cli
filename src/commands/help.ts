import initInk from '../components/common/init-ink';
import { FlagsType } from '..';

const help = (args: string[], flags: FlagsType) => {
  return initInk('help', args, flags);
};

export default help;
