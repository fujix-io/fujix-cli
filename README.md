# FujiX CLI

[👾 Usage examples](https://github.com/fujix-io/fujix-examples)

## How to use

### Install CLI
```
npm install -g @fujix/cli
```

## Commands:

### `generate`
Used for generating bindings code by credentials

### flags:
  - `-o/--out` - used for specifying generated folder name
  - `-u/--url` - used for providing endpoint url
  - `-t/--token` - used for providing endpoint token 
  - `-v/--version` - used for displaying package version
  - `-h/--help` - used for displaying list of commands
  - `--raw` - used for CI/CD command lines. Diplay output with native output-streams. Can be used only with `--token` and `--url` flags
  - `--silent` - turn off all cli-outputs. Can be used only with `--token` and `--url` flags
