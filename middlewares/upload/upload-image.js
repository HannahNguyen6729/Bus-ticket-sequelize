//upload image : using multer library to upload the image
const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImage = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`);
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/images/${type}`);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const maxSize = 1 * 1024 * 1024; //1
  const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
      const fileNameExtension = file.originalname.slice(-4);
      const imgExtensionList = [".jpg", ".png", ".gif"];
      const check = imgExtensionList.includes(fileNameExtension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("img file extension is invalid"));
      }
    },
  });

  //const upload = multer({ dest: "./uploads/avatars" });
  return upload.single(type);
};
module.exports = { uploadImage };
