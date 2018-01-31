function listenInputChanges(field) {
	field.addEventListener('input', function() {
		removeInvalidStatus(field);
	});
}

function removeInvalidStatus(field) {
	if (field.classList.contains('form-field-invalid')) {
		field.classList.remove('form-field-invalid')
	}
}




var overlay = document.querySelector('.modal-overlay');




// Работа с формой входа


var popupForm = document.querySelector('.modal-content-form');

if (popupForm) {

	var openForm = document.querySelector('.login-btn');
	var loginForm = popupForm.querySelector('.login-form');
	var loginFormFields = document.querySelectorAll('.login-form-field');

	var loginField = popupForm.querySelector('.login-field');
	var passwordField = popupForm.querySelector('.password-field');

	var closeForm = document.createElement('button');
	closeForm.classList.add('modal-content-close');
	closeForm.type = 'button';
	popupForm.appendChild(closeForm);


	openForm.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.add('modal-overlay-show');
	   	popupForm.classList.remove('modal-content-form-error');
	   	popupForm.classList.add('modal-content-form-show');
	   	loginField.focus();
	});


	loginForm.addEventListener('submit', function(event) {
		var invalidFieldNum = 0;
		for (var i = 0; i < loginFormFields.length; i++) {
			if (!loginFormFields[i].value) {
				event.preventDefault();
				loginFormFields[i].classList.add('form-field-invalid');

				if ( (loginFormFields[invalidFieldNum] != document.activeElement) && (i >= invalidFieldNum) ) {
					invalidFieldNum = i;
					loginFormFields[invalidFieldNum].focus();
				}

				popupForm.classList.remove('modal-content-form-error');
		      	setTimeout(function() {
		         	popupForm.classList.add('modal-content-form-error')
		      	}, 1);
			}
		}
	});

	for (var i = 0; i < loginFormFields.length; i++)  {
		listenInputChanges(loginFormFields[i]);
	}


	closeForm.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.remove('modal-overlay-show');
	   	popupForm.classList.remove('modal-content-form-show');
	});

	overlay.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.remove('modal-overlay-show');
	   	popupForm.classList.remove('modal-content-form-show');
	});

	window.addEventListener('keydown', function(event) {
	   	if (event.keyCode === 27) {
	      	overlay.classList.remove('modal-overlay-show');
	      	popupForm.classList.remove('modal-content-form-show');
	   	}
	});

}




// Работа с картой


var popupMap = document.querySelector('.modal-content-map');

if (popupMap) {
	var openMapBtn = document.querySelector('.map-btn');
	var openMapLink = document.querySelector('.map-link');

	// var closeMap = popupMap.querySelector('.modal-content-close');
	var closeMap = document.createElement('button');
	closeMap.classList.add('modal-content-close');
	closeMap.type = 'button';
	popupMap.appendChild(closeMap);

	if (openMapBtn) {
	   	openMapBtn.addEventListener('click', function(event) {
	      	event.preventDefault();
	      	overlay.classList.add('modal-overlay-show');
	      	popupMap.classList.add('modal-content-map-show');
	   	});
	}

	openMapLink.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.add('modal-overlay-show');
	   	popupMap.classList.add('modal-content-map-show');
	});


	closeMap.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.remove('modal-overlay-show');
	   	popupMap.classList.remove('modal-content-map-show');
	});

	overlay.addEventListener('click', function(event) {
	   	event.preventDefault();
	   	overlay.classList.remove('modal-overlay-show');
	   	popupMap.classList.remove('modal-content-map-show');
	});

	window.addEventListener('keydown', function(event) {
	   	if (event.keyCode === 27) {
	      	overlay.classList.remove('modal-overlay-show');
	      	popupMap.classList.remove('modal-content-map-show');
	   	}
	});
}




// Работа с фото на главной


var indexGallery = document.querySelector('.index-gallery');

if (indexGallery) {

	indexGallery.classList.add('index-gallery-js');

	var photos = indexGallery.querySelectorAll('.gallery-photo');

	var firstphoto = indexGallery.querySelector('.gallery-photo:first-of-type');
	firstphoto.classList.add('first-photo');
	firstphoto.classList.add('current-photo');

	var lastPhoto = indexGallery.querySelector('.gallery-photo:last-of-type');
	lastPhoto.classList.add('last-photo');

	var currentPhoto = indexGallery.querySelector('.current-photo');


	var galleryNav = document.createElement('div');
	galleryNav.classList.add('gallery-nav');
	indexGallery.appendChild(galleryNav);

	var prevButton = document.createElement('button');
	prevButton.classList.add('btn');
	prevButton.type = 'button';
	prevButton.textContent = 'Назад';
	galleryNav.appendChild(prevButton);

	var nextButton = document.createElement('button');
	nextButton.classList.add('btn');
	nextButton.type = 'button';
	nextButton.textContent = 'Вперед';
	galleryNav.appendChild(nextButton);


	nextButton.addEventListener('click', function() {
		if (currentPhoto.classList.contains('last-photo')) {
	        firstphoto.classList.add('current-photo');
			currentPhoto.classList.remove('current-photo');
			currentPhoto = indexGallery.querySelector('.current-photo');
	    } else {
			currentPhoto.nextSibling.nextSibling.classList.add('current-photo');
		    currentPhoto.classList.remove('current-photo');
		    currentPhoto = indexGallery.querySelector('.current-photo');
	    }
	});

	prevButton.addEventListener('click', function() {
		if (currentPhoto.classList.contains('first-photo')) {
	        lastPhoto.classList.add('current-photo');
			currentPhoto.classList.remove('current-photo');
			currentPhoto = indexGallery.querySelector('.current-photo');
	    } else {
			currentPhoto.previousSibling.previousSibling.classList.add('current-photo');
		    currentPhoto.classList.remove('current-photo');
		    currentPhoto = indexGallery.querySelector('.current-photo');
	    }
	});

}




// Валидация формы записи


var appointmentForm = document.querySelector('.appointment-form');

if (appointmentForm) {

	var appointmentFormFields = document.querySelectorAll('.appointment-field');

	appointmentForm.addEventListener('submit', function(event) {
		var invalidFieldNum = 0;
		for (var i = 0; i < appointmentFormFields.length; i++) {
			if (!appointmentFormFields[i].value) {
				event.preventDefault();
				appointmentFormFields[i].classList.add('form-field-invalid');

				if ( (appointmentFormFields[invalidFieldNum] != document.activeElement) && (i >= invalidFieldNum) ) {
					invalidFieldNum = i;
					appointmentFormFields[invalidFieldNum].focus();
				}
			}
		}
	});

	for (var i = 0; i < appointmentFormFields.length; i++)  {
		listenInputChanges(appointmentFormFields[i]);
	}
}




// Переключение фотографий в описании товара


var goodsItemGallery = document.querySelector('.goods-item-gallery');

if (goodsItemGallery) {

   	var itemPhotos = goodsItemGallery.querySelectorAll('.item-photo');
   	var primaryPhoto = goodsItemGallery.querySelector('.primary-photo');

   	for (var i = 0; i < itemPhotos.length; i++) {
      	clickPhoto(itemPhotos[i]);
   	}

   	function clickPhoto(itemPhoto) {
      	itemPhoto.addEventListener('click', function() {
         	getPhotoSrc(itemPhoto);
      	});
   	};

   	function getPhotoSrc(itemPhoto) {
      	var photoSrc = itemPhoto.getAttribute('src');
      	primaryPhoto.setAttribute("src", photoSrc);
   	};

}
