import initInk from '../components/common/init-ink';
import { FlagsType } from '..';

const version = (args: string[], flags: FlagsType) => {
  return initInk('version', args, flags);
};

export default version;
