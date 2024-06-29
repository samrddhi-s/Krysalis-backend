import { Schema, model, Document, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema<UserInterface>({
  name: { type: String, required: true, default: '' },
  email: { type: String, required: true, unique: true, default: '' },
  password: { type: String, required: true },
});

UserSchema.plugin(paginate);

const UserModel = model<UserInterface, PaginateModel<UserInterface>>(
  "UserModel",
  UserSchema,
);

export default UserModel;
