import { Schema, model } from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2";

const FollowSchema = Schema ({
following_user: {
    type: Schema.ObjectId,
    ref:"User",
    required: true
},
followed_user: {
    type: Schema.ObjectId,
    required: true
},
create_at: {
    type: Date,
    default: Date.now
},

});

// definir el indice unico para evitar seguir varias veces al mismo usuario

FollowSchema.index({following_user: 1},{followed_user: 1}, {unique: true})

//configurar paginacion

FollowSchema.plugin(mongoosePaginate);

// Configrar el plugin de paginación
FollowSchema.plugin(mongoosePaginate);

export default model("Follow", FollowSchema, "follows");

