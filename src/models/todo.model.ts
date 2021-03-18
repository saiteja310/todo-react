import { ITodo } from "../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },

    bucket: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)