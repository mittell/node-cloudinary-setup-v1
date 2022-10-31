const { ErrorHandler } = require('../utils/errorHandler');

const uploadImage = async (req, res, next) => {
	try {
		res.json({
			status: 'success',
			message: 'Upload successful',
		});
	} catch (error) {
		next(new ErrorHandler(error.statusCode || 500, error.message));
	}
};

module.exports = {
	uploadImage,
};
