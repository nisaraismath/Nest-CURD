import { Document } from "mongoose";

export interface Iuser extends Document{
   readonly  name:String;
   readonly age:Number;
   readonly  mobileNumber:String;
}