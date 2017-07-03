/**
 * Created by otto on 2017/5/8.
 */

import ImagePicker from 'react-native-image-crop-picker'

/**
 * 选取单张图片（不进行裁剪）
 * @returns {Promise<Image|Image[]>}
 */
export const pickSingleWithoutCrop = () => {
    return ImagePicker.openPicker({
        multiple: false,
        cropping: false,
    })
}

/**
 *  从相机获取图片
 * @returns {Promise<Image|Image[]>}
 */
export const pickFromCameraWithoutCrop = () => {
    return ImagePicker.openCamera({
        cropping: false
    })
}

/**
 * 选取单张图片（不进行裁剪）
 * @returns {Promise<Image|Image[]>}
 */
export const pickSingleWithCrop = () => {
    return ImagePicker.openPicker({
        multiple: false,
        cropping: true,
    })
}

/**
 *  从相机获取图片
 * @returns {Promise<Image|Image[]>}
 */
export const pickFromCameraWithCrop = () => {
    return ImagePicker.openCamera({
        cropping: true
    })
}