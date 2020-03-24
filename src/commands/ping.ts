
import initInk from '../components/common/init-ink';
import { FlagsType } from '..';

const ping = (args: string[], flags: FlagsType) => {
  return initInk('ping', args, flags);
};

export default ping;
