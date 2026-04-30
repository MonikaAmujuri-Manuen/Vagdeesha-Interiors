import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    location: {
      type: String,
    },

    details: {
      type: String,
    },

    // 🔥 PDF FILE (Cloudinary URL)
    fileUrl: {
      type: String,
    },

    fileName: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);