import { Profile } from "../model/profile";
import { Message } from "../model/message";

const userList:Profile[]=[
    {firstname:'MOTASSEM',lastname:'EZZ',email:'motassem2010@gmail.com',
    username:'motassem',password:'123456',birthdate:new Date()},
    {firstname:'abdo',lastname:'motassem',email:'abdo@gmail.com',
    username:'abdo',password:'123456',birthdate:new Date()},
    {firstname:'yacine',lastname:'motassem',email:'yacine@gmail.com',
    username:'yacine',password:'123456',birthdate:new Date()},
];
const messagelist:Message[]=[

    {user:userList[0],date:new Date(),lastMessage:'hello from motassem'},
    {user:userList[1],date:new Date(),lastMessage:'hello from abo'},

    {user:userList[2],date:new Date(),lastMessage:'hello from yacine'},

];

export const MESSAGE_LIST = messagelist