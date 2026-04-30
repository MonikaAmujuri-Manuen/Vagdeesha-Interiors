import Contact from "../models/Contact.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// CREATE CONTACT
export const createContact = async (req, res) => {
  try {
    let fileUrl = "";
    let fileName = "";

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (req.file && req.file.buffer) {
      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: "raw",
              folder: "interior-pdfs",
            },
            (error, result) => {
              if (error) {
                console.error("Cloudinary Error:", error);
                reject(error);
              } else {
                resolve(result);
              }
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await streamUpload();

      fileUrl = result.secure_url;
      fileName = req.file.originalname;
    }

    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      location: req.body.location,
      details: req.body.details,
      fileUrl,
      fileName,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });

  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};


// GET ALL CONTACTS
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};