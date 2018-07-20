
import imagesLoaded from "./thirdparty/imagesloaded.pkgd.js";

var areImagesLoaded = function(selector){
	return new Promise(function(resolve, reject){
		imagesLoaded(selector, function(error){
			if ( error ) {
				reject(error)
				return
			}
			resolve()
		})
	})
}

export default areImagesLoaded
