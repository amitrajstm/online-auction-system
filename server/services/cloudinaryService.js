import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// console.log(process.env.CLOUDINARY_API_SECRET ,"===>",process.env.CLOUDINARY_API_KEY ,"===>",process.env.CLOUDINARY_CLOUD_NAME);

const uploadImage = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'auctions',
        });
        return result.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error); // Log the actual error
        throw new Error('Error uploading image to Cloudinary');
    }
};

export default uploadImage;
