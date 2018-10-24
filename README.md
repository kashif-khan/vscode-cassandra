
<p align="left">
<img src="https://raw.githubusercontent.com/kdcro101/vscode-cassandra/master/media/title.png" title="Cassandra workbench for Visual Studio Code" alt="Cassandra workbench for Visual Studio Code">
</p>
<p>
Design and query database with help of generated templates, autocomplete and inline code decorations
</p>


## Quick start

Activate extension by running command from pallete `Cassandra Workbench: Generate configuration`. 

Switch to `Cassandra worbench` panel by clicking icon.


<p align="center">
   <img src="https://raw.githubusercontent.com/kdcro101/vscode-cassandra/master/media/res/panel-and-settings.png?image1" />
</p>

## Features

## Configuration


## Workspace configuration
`cassandraWorkbench.excludeKeyspaces`: `string[]` - default `[]`
- list of regexp pattern to exclude when listing keyspaces in panel

To exclude `system` keyspaces use:
```ts
 "cassandraWorkbench.excludeKeyspaces": [
            "^system$",
            "^system_",
        ]
```

`cassandraWorkbench.useWorkspace` : `number` - default `0`
- index of workspace where to look for configuration file `.cassandraWorkbench.jsonc`. For multi-root only.

