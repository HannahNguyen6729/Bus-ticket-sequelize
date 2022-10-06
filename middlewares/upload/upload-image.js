//upload image : using multer library to upload the image
const multer = require("multer");

const uploadImage = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/avatars");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const fileNameExtension = file.originalname.slice(-4);
      const imgExtensionList = [".jpg", ".png", ".gif"];
      const check = imgExtensionList.includes(fileNameExtension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("file img extension is invalid"));
      }
    },
  });

  //const upload = multer({ dest: "./uploads/avatars" });
  return upload.single("avatar");
};
module.exports = { uploadImage };
