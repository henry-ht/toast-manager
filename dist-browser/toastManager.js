var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
        __spreadArray([], toastHiden, true).map(function (toast) { return toast.remove(); });
    }
};
/**
 *
 * @param type string
 * @param title string
 * @param message string
 * @param date string
 * @returns
 */
var notifyHtml = function (type, title, message, date) {
    var id = "t" + Math.floor(Math.random() * Date.now());
    var html = '<div id="' + id + '" class="toast ' + modalTypes[type] + ' border-0 mb-3 animate__animated animate__fadeInRight" data-see="false" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><strong class="me-auto">' + title + '</strong><small>' + date + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">' + message + '</div></div>';
    return { html: html, id: id };
};
/**
 *
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param message string
 * @returns json
 */
var simpleHtml = function (type, message) {
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
export var simpleNotify = function (type, message, options) {
    if (options === void 0) { options = {}; }
    clearHide();
    var toast = simpleHtml(type, message);
    var container = document.getElementById('toast-container');
    if (container != null) {
        container.insertAdjacentHTML("afterbegin", toast.html);
        var toastEl = document.querySelectorAll('#toast-container #' + toast.id + '[data-see="false"]');
        toastEl[0].setAttribute("data-see", "true");
        if (bootstrap != null) {
            new bootstrap.Toast(toastEl[0], options).show();
        }
    }
};
/**
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param title string
 * @param message string
 * @param date string
 */
export var notify = function (type, title, message, date, options) {
    if (options === void 0) { options = {}; }
    clearHide();
    var toast = notifyHtml(type, title, message, date);
    var container = document.getElementById('toast-container');
    if (container != null) {
        container.insertAdjacentHTML("afterbegin", toast.html);
        var toastEl = document.querySelectorAll('#toast-container #' + toast.id + '[data-see="false"]');
        toastEl[0].setAttribute("data-see", "true");
        if (bootstrap != null) {
            new bootstrap.Toast(toastEl[0], options).show();
        }
    }
};
