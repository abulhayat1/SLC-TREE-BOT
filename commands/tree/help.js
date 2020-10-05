const { Command } = require("discord.js-commando");

module.exports = class MeowCommand extends Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "tree",
      memberName: "help",
      description: "Replies help!.",
    });
  }

  run(message) {
    const embed = {
      title: "Help has arrived :)",
      description:
        "**To host a forest room use the command  `?tree`** \n\n :warning: Be sure to reply within 30 seconds or the command will be canceled automatically  and you have to use `?tree` again \n",
      url: "https://discordapp.com",
      color: 0x2ecc71,
      timestamp: "2020-07-07T08:40:11.445Z",
      footer: {
        icon_url: this.client.user.displayAvatarURL(),
        text: "SLCTREEBOT",
      },
      thumbnail: {
        url: "https://i.imgur.com/yUASJAw.png",
      },
      fields: [
        {
          name: "Step :one: :",
          value:
            "Tree link or Code , Type the code or paste the link for the room",
        },
        {
          name: "Example:",
          value:
            "`5D4GZW3` ** OR ** `https://forestapp.cc/join-room?token=5D4GZW3` ** OR **  `Plant trees with me on Forest! Enter room code:5D4GZW3, or join by tapping here: https://forestapp.cc/join-room?token=5D4GZW3.`",
        },
        {
          name: "Step :two: :",
          value: "Tree name , The name of the tree you are hosting",
        },
        {
          name: "Example:",
          value: "Water Spirit Or Pink Oak ",
        },
        {
          name: "Step :three: :",
          value:
            " Tree starting in ,  In how many minutes will the tree be starting ",
        },
        {
          name: "Example:",
          value:
            "type `6` or `10` :octagonal_sign: Dont Include `m` or `M` or `minutes`",
        },
        {
          name: "Step :four: :",
          value: "Duration of the tree , How long is the tree in minutes ?",
        },
        {
          name: "Example:",
          value:
            "`150` Or `55` or `60`  :octagonal_sign: Dont Include `m` or `M` or `minutes`",
        },
        {
          name: "Step :five: :",
          value: "Any additional remarks  (optional ), Have anything to say?",
        },
        {
          name: "Example:",
          value: " `Pom Train(1/10)` or  `Lets go!` or simply type `No` ",
        },
        {
          name: "RULES :octagonal_sign: : ",
          value:
            ":exclamation: If anyone else is hosting , please wait for them to finish\n\n:exclamation: You need to reply in every step within 30sec or else it will be canceled \n\n:exclamation: If you change your mind you can type `cancel` to cancel the room \n\n:exclamation:You can always contact Tech Team / Admins for any confusion",
        },
      ],
    };

    return message.embed(embed);
  }
};
