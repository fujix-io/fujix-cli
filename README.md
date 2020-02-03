# FujiX CLI
## How to use
#
### Install CLI
```
npm install -g @fujix/cli
```

## Commands

### `init <folder_name>`

Used for initializing projects with required dependencies. It using generate under the hood as a part of the initial process

### `generate`

Used for generating bindings code by credentials from fujix-credentials.json (also install required packages)

### flags:
  - #### `--language <typescript|javascript>` - used for selecting language of generated code
  - #### `--out <folder_name>` - used for specifying generated folder name
  - #### `--npm` - used for selecting package manager which using by generation process


### `ping`

Used for checking avialability of server by provided credentials from fujix-credentials.json

### `login`

Used for authentication for project



