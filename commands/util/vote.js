const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;


module.exports = class VoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vote',
            group: 'tree',
            memberName: 'vote',
            description: "Starts a yes/no/neutral vote.",
            userPermissions: ['MANAGE_MESSAGES'],
            clientPermissions: ["MANAGE_MESSAGES"],
            examples: ['?vote "Question" "Description"'],
            args: [
                {
                    key: 'question',
                    prompt: 'What is the vote question?',
                    type: 'string',
                    validate: question => {
                        if (question.length < 1001 && question.length > 2) return true;
                        return 'Polling questions must be between 1 and 1000 characters in length.';
                    }
                },
                {
                    key: 'desc',
                    prompt: '(Optional) Do you have more details?',
                    type: 'string',
                    default: ' ',
                    validate: desc => {
                        if (desc.length < 1001 && desc.length > 2) return true;
                        return 'Polling questions must be between 1 and 1000 characters in length.';
                    }
                },
                 {
                    key: 'channelNameInput',
                    prompt: 'Poll Channel ?',
                    type: 'string',
                    validate: question => {
                        if (question.length < 1001 && question.length > 2) return true;
                        return 'Polling questions must be between 1 and 1000 characters in length.';
                    }
                },
            ]
        });
    }
    
    async run(msg, { question, desc, channelNameInput}) {

      const channelName = channelNameInput;
      const channelId = channelName.substr(2, 18)

        let embed = new MessageEmbed()
            //.setThumbnail(msg.client.user.displayAvatarURL({ format: 'png', dynamic: true }))
            .setTitle('❄️POLL❄️')
            .setDescription(desc)
            .setAuthor(msg.author.tag, msg.author.avatarURL({ format: 'png', dynamic: true }))
            .addFields(
              { name: '\u200B', value: `${question}` },
              { name: '\u200B', value: '\u200B' }
            )
            .setColor(0x347ff7)
            .setTimestamp();
            
            //embed.setFooter(`@SLC`)
            
        msg.delete();
        
        const sentMessage = await  this.client.channels.cache.get(channelId).send({files: ["https://i.imgur.com/VLwIBB2.gif"]});
        this.client.channels.cache.get(channelId).send({embed: embed}).then(embedMessage => {
    embedMessage.react('👍')
    embedMessage.react('👎')
    embedMessage.react('🤷')
            .catch(console.error);
    })
   }
};