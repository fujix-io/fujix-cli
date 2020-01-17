import initInk from "../components/common/init-ink"

const ping = (args: string[], flags: any) => {
  return initInk('ping', args);
}

export default ping;
