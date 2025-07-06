import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from 
"mongoose-aggregate-paginate-v2"

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            ype: String, //cloudinary url
            required: true
        },
        title: {
            ype: String, 
            required: true
        },
        description: {
            ype: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: 0
        },
         owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
         }
    }
)

export const Video = mongoose.model('Video', videoSchema)