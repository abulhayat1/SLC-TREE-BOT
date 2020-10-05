# SLC-TREE-BOT

-----------------1-----------------------
npm i

------------------ 2 ---------------------
Set DISCORD_TOKEN with your BOT TOKEN - (file: .env)

-------------------3-----------------------
uncomment require("dotenv").config(); if you are in local machine - (file: index.js)

-------------------4------------------------
create new roles in your server and then set them to the role variables - (file: index.js)
//tree_role_id
const tree_role_10_30 = "709707729329193020";
const tree_role_35_55 = "709707938213789766";
const tree_role_60_90 = "709708100202135592";
const tree_role_95_120 = "709708335800254534";
const tree_role_125_180 = "709708477144105021";
const tree_role_no_role = "725171650374664266";
//global ping time role
const default_tree_Ping = "665631792795222019";
//host channel
const submitted_channel_id = "660569187105767424";

------------------5---------------------------------------------
file:index.js

this.client.channels.cache.get('enter the id of the channel you want to host your tree').send(

-------------------4 ----------------------
node index.js
