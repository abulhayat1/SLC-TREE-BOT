# SLC TREE BOT

Discord js bot to host forest trees

## Installation

Use the package manager [npm ] to install bot.

```bash
npm install
```

## config

1. Set DISCORD_TOKEN with your BOT TOKEN - (file: .env)

```
DISCORD_TOKEN=YOUR BOT TOKEN
```

2. uncomment `require("dotenv").config();` if you are in local machine - (file: index.js)

3. create new roles in your server and then set the roles id to  role variables - (file: index.js)

```bash
const tree_role_10_30 = "roleid";
const tree_role_35_55 = "roleid";
const tree_role_60_90 = "roleid";
const tree_role_95_120 = "roleid";
const tree_role_125_180 = "roleid";
const tree_role_no_role = "roleid";
//global ping time role
const default_tree_Ping = "roleid";
```

4. create a new channel to host your tree , copy the channel id and setup these two lines

```bash
const submitted_channel_id = "enter the id of the channel you want to host your tree";

this.client.channels.cache.get('enter the id of the channel you want to host your tree').send(
```

## Start the Bot

```bash
node index.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

x
