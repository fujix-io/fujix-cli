# FujiX CLI
## How to use

### Install CLI
```
npm install -g @fujix/cli
```

## Commands:

### `init <folder_name>`
Used for initializing projects with required dependencies. It using generate under the hood as a part of the initial process

### `generate`
Used for generating bindings code by credentials from fujix-credentials.json (also install required packages)

### flags:
  - `--language/-l <typescript|javascript>` - used for selecting a language of initiated project
  - `-o/--out` - used for specifying generated folder name
  - `-u/--url` - used for providing endpoint url
  - `-t/--token` - used for providing endpoint token 
  - `-v/--version` - used for displaying package version
  - `-h/--help` - used for displaying list of commands

