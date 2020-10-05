const { Command } = require('discord.js-commando');
const getUrls = require('get-urls');

//tree_role_id
const tree_role_10_30 =  "709707729329193020";
const tree_role_35_55 =  "709707938213789766";
const tree_role_60_90 =  "709708100202135592";
const tree_role_95_120 =  "709708335800254534";
const tree_role_125_180 =  "709708477144105021";
const tree_role_no_role = "725171650374664266";
//global ping time role
const default_tree_Ping = "665631792795222019";
//add tommrow
const submitted_channel_id = "660569187105767424";



module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'host',
			aliases: ['tree', 'event'],
			group: 'tree',
			memberName: 'tree',
			description: 'host you tree session',
      guildOnly: true,
			args: [
        {
					key: 'Link',
					prompt: '\** Step :one: : Tree Code or Link.\**  `eg:5D4GZW3 or https://forestapp.cc/join-room?token=5D4GZW3` (1/5)',
					type: 'string',
          validate: Link => {
						if (Link.length > 5 ) return true;
						return 'The tree code can\'t be less than 6 characters. try again.';
					},
				},
				{
					key: 'tree_name',
					prompt: '\** Step :two: : What Is The Tree Name ?\**  `eg:Water Spirit` (2/5)',
					type: 'string',
					validate: tree_name => {
						if (tree_name.length < 30) return true;
						return 'tree name is above 30 characters';
					},
				},
				{
					key: 'Starting_Time',
					prompt: '\** Step :three: : Starting In ? \** `eg:6` (3/5)',
					type: 'integer',
          validate: Starting_Time => {
						if (Starting_Time < 15 ) return true;
						return 'starting time can\'t be greater than 15 minitues.Try again !`Don\'t Include M or Minutes` ';
					},
				},
				{
					key: 'duration',
					prompt: '\** Step :four: : Tree Duration ?\** `eg:60` (4/5)',
					type: 'integer',
          validate: duration => {
						if (duration < 181 ) return true;
						return 'The duration can\'t be greater than 180 minutes. try again. `Don\'t include m or minutes` ';
					},
				},
				
				{
					key: 'extra_re',
					prompt: '\** Step :five: : Any Additional Remarks?\**  `eg: pom 5/10 or no` (5/5)',
					type: 'string',
				},
			],
		});
	}

	/*
	async run(message, { tree_name }) {
		message.delete();
		return message.say(`${tree_name}`);
	}*/




	run(message, { tree_name, Starting_Time, duration, option, Link, extra_re }) {
		

    
  let error_link,error_code;
  let myURL,code;
  //let url;

/*
  if(Link.length > 8 ){
    //getting url from link
    const aurl = getUrls(`${Link}`);
    const url = Array.from(aurl);
    //searching for token from url
    try{
      myURL = new URL(url);
      code = myURL.searchParams.get('token');
    }catch{
      error_link = true;
    }	
  }else{
    code = Link;
  }
  */

  //trd
 
    //getting url from link
    const aurl = getUrls(`${Link}`);
    const url = Array.from(aurl);
    //searching for token from url
    try{
      myURL = new URL(url);
      code = myURL.searchParams.get('token');
    }catch{
      error_link = true;
    }

    if(code==undefined){
      code = (Link.slice(0, 7)).toUpperCase();;
    }

  //tst

  code = code.replace(/[^a-z0-9]/gi,'');  

  //find tree role from input
  let tree_role_duaration = tree_roles(duration);




    this.client.channels.cache.get('660569187105767424').send(


			`<@&${tree_role_duaration}>`+`<@&${default_tree_Ping}>`
	,

			{ embed: {
			  color: 'RANDOM',
        title: `${m2h(duration)} :deciduous_tree: ${tree_name}\n` + `\n :point_down:  tap on the code to copy`,
				author: {
			  name: message.member.user.tag,
			  icon_url: message.author.displayAvatarURL(),
				},
				description:`${code}` ,
        thumbnail: {
			  url: 'https://i.imgur.com/Zhedowe.png',
				},
				fields: [
			  {
						name: '\u200b',
						value: '\u200b',
						inline: false,
			  },
			  {
						name: '⏰ Starting In:',
						value: `${Starting_Time} \`min\``,
						inline: true,
			  },
			  {
						name: '🕓 Duration:',
						value: `${duration} \`minutes\``,
						inline: true,
			  },
			  {
						name: '🔑 Code:',
						value: `${code}`,
						inline: true,
			  },
			  {
						name: 'Link:',
						value:'https://forestapp.cc/join-room?token='+`${code}`,
						inline: false,
			  },
			  {
						name: 'Host',
						value: "<@" + message.member.user.id + ">",
						inline: true,
			  },
        {
						name: 'Additional Remarks',
						value: `${extra_re}`,
						inline: false,
			  },


				],
				timestamp: new Date(),
			  footer: {
					icon_url: this.client.user.displayAvatarURL(),
					text: '© SLCBOT',
			  },
			},
			},
		) 

  var msg = "\** :evergreen_tree: Successfully Planted In" + " <#" + submitted_channel_id + ">" + " by " + "<@" + message.member.user.id + "> **";
  message.channel.send(msg);
  


	}

  


};


function tree_roles(t) {
	if (t >= 10 && t <= 30){
	  return tree_role_10_30;
	}else if (t >= 35 && t <= 55){
		return tree_role_35_55;
	}else if (t >= 60 && t <= 90){
		return tree_role_60_90;
	}else if(t >= 95 && t <= 120){
		return tree_role_95_120 ;
	}else if(t >= 125 && t <= 180){
		return tree_role_125_180 ;
	}else{
		return tree_role_no_role;
	}
  }

function m2h(minutes){
	let total = minutes;
	let hrs = Math.floor(total/60);
	let min = total % 60;
return hrs+"\`hr\`"+min+"\`min\` ";
}