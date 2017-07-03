/**
 * 用于向服务器上传文件
 * Created by otto on 2017/5/8.
 */

import RNFetchBlob from 'react-native-fetch-blob'
import * as RNFetch from './rnFetch'
import APIService from '../service/APIService'
import api from '../config/api'

/**
 * 上传文件
 * @param url 文件上传url地址
 * @param params 参数
 * @param filePath 文件本地绝对路径
 * @param fileName 文件名称
 */
export const uploadFile = ({url, params, filePath, fileName}) => {

    let formData = new FormData()

    if (params && params.length > 0) {
        params.forEach(e => {
            formData.append(e.key, e.value)
        })
    }

    const file = {uri: filePath, type: 'multipart/form-data', name: fileName}
    formData.append('files', file)

    RNFetch.post(url, formData, {'Content-Type': 'multipart/form-data'})
}

const fileName = 'imageFileName.png'

/**
 * 上传图片
 */
export const uploadImage = (path) => {

    return new Promise((resolve, reject) => {
        //先获取图片上传所需信息
        APIService.getImageUploadInfo(fileName)
            .then(
                async (ossFormData) => {
                    try {
                        console.log(`upload image data:${JSON.stringify(ossFormData)}`)
                        const result = await doUploadImageFile(path, ossFormData)
                        console.log(`upload image result:${JSON.stringify(result)}`)
                        console.log(`upload image response info:${JSON.stringify(result.respInfo)}`)
                        console.log(`upload image status : ${result.respInfo.status}`)
                        const status = parseInt(result.respInfo.status)
                        console.warn(`status >= 200 && status < 300:${status >= 200 && status < 300}`)
                        if (status >= 200 && status < 300) {
                            resolve(ossFormData)
                        } else {
                            reject({code: -1, message: '上传图片失败'})
                        }
                    } catch (e) {
                        console.warn(`e`)
                        reject(e)
                    }
                },
                error => reject(error)
            )
            .catch(e => reject(e))
    })

}

/**
 * 执行图片上传
 */
const doUploadImageFile = (path, ossFormData) => {
    return RNFetchBlob.fetch(
        'POST',
        api.imageUpload,
        {'Content-Type': 'multipart/form-data',},
        [
            // append field data from file path
            {name: 'OSSAccessKeyId', data: ossFormData.accessID},
            {name: 'expire', data: ossFormData.expire},
            {name: 'key', data: ossFormData.key},
            {name: 'policy', data: ossFormData.policy},
            {name: 'signature', data: ossFormData.signature},
            {name: 'file', filename: fileName, type: 'file', data: RNFetchBlob.wrap(path)}
        ])
}