const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { ErrorHandler } = require('../utils/errorHandler');
const path = require('path');

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
			cb(new Error('Unsupported file type!'), false);
			return;
		}
		cb(null, true);
	},
});

const uploadToCloudinary = async (filePath) => {
	try {
		const res = await cloudinary.uploader.upload(filePath);
		// const { uploader } = cloudinary;

		// const res = await uploader.upload(
		// 	`data:image/${format};base64,${fileString}`
		// );

		return res;
	} catch (error) {
		throw new ErrorHandler(500, error);
	}
};

module.exports = {
	upload,
	uploadToCloudinary,
};
