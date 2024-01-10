import Toast from "bootstrap/js/dist/toast";
var modalTypes = {
    "primary": "text-bg-primary",
    "secondary": "text-bg-secondary",
    "danger": "text-bg-danger",
    "dark": "text-bg-dark",
    "info": "text-bg-info",
    "light": "text-bg-light",
    "success": "text-bg-success",
    "warning": "text-bg-warning",
};
/**
* empty container toast
*/
export var clearHide = function () {
    var toastHiden = document.querySelectorAll('#toast-container .toast.hide');
    if (toastHiden != null) {
        [toastHiden].map(function (toast) { return toast.remove(); });
    }
};
/**
 *
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param message string
 * @returns
 */
export var simple = function (type, message) {
    var id = "t" + Math.floor(Math.random() * Date.now());
    var html = '<div class="toast ' + modalTypes[type] + ' border-0 mb-3 animate__animated animate__fadeInRight" id="' + id + '" data-see="false" role="alert" data-bs-autohide="true" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + message + '</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>';
    return { html: html, id: id };
};
/**
 *
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param message string
 */
export var simpleNotify = function (type, message) {
    clearHide();
    var toast = simple(type, message);
    var container = document.getElementById('toast-container');
    if (container != null) {
        container.insertAdjacentHTML("afterbegin", toast.html);
        var toastEl = document.querySelectorAll('#toast-container #' + toast.id + '[data-see="false"]');
        toastEl[0].setAttribute("data-see", "true");
        new Toast(toastEl[0], {}).show();
    }
};
