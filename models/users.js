import { Schema, model } from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2";

const UserSchema = Schema ({
name: {
    type: String,
    required: true,
},
last_name: {
    type: String,
    required: true
},
nick: {
    type: String,
    required: true,
    unique: true
},
email: {
    type: String,
    required: true,
    unique: true
},
bio: String,

password: {
    type: String,
    required: true
},
rol: {
    type: String,
    default: "role_user"
},
image: {
    type: String,
    default: "default_user.png"
},
create_at: {
    type: Date,
    default: Date.now
}
});

//Pluggin de paginacion de mongo

UserSchema.pligin(mongoosePaginate);

export default model("User", UserSchema, "Users")