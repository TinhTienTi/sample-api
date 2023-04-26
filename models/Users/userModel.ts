import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'Users' })
export class userModel {
  @Prop()
  name?: string;
}

export const UsersSChema = SchemaFactory.createForClass(userModel);
