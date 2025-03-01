const { mongoose, model } = require("mongoose");

const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    iscompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = model("Task", TaskSchema);
