const modalTypes = {
    "primary"  : "text-bg-primary",
    "secondary": "text-bg-secondary",
    "danger"   : "text-bg-danger",
    "dark"     : "text-bg-dark",
    "info"     : "text-bg-info",
    "light"    : "text-bg-light",
    "success"  : "text-bg-success",
    "warning"  : "text-bg-warning",
};

/**
* empty container toast
*/
export const clearHide = () => {
    const toastHiden = document.querySelectorAll('#toast-container .toast.hide') as NodeListOf<HTMLInputElement> | null;
    if(toastHiden != null){
        [...toastHiden].map(toast => toast.remove())
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
const notifyHtml = (type:string, title:string,message:string, date:string) => {
    let id = "t"+Math.floor(Math.random() * Date.now());
    let html = '<div id="'+id+'" class="toast '+modalTypes[type  as keyof typeof modalTypes]+' border-0 mb-3 animate__animated animate__fadeInRight" data-see="false" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><strong class="me-auto">'+title+'</strong><small>'+date+'</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">'+message+'</div></div>';

    return {html, id};
};

/**
 * 
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param message string
 * @returns json
 */
const simpleHtml = (type:string, message:string) => {
    let id = "t"+Math.floor(Math.random() * Date.now());
    let html = '<div class="toast '+modalTypes[type  as keyof typeof modalTypes]+' border-0 mb-3 animate__animated animate__fadeInRight" id="'+id+'" data-see="false" role="alert" data-bs-autohide="true" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">'+message+'</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>';
    return {html, id};
};

/**
 * 
 * primary, secondary, danger, dark, info, light, success, warning
 * @param type string
 * @param message string
 */
export const simpleNotify = (type:string, message:string, options = {}) => {
    clearHide();
    let toast = simpleHtml(type, message);
    let container = document.getElementById('toast-container') as HTMLInputElement | null;
    if(container != null){
        container.insertAdjacentHTML("afterbegin", toast.html);
        const toastEl = document.querySelectorAll('#toast-container #'+toast.id+'[data-see="false"]');
        toastEl[0].setAttribute("data-see", "true");
        if(bootstrap != null){
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
export const notify = (type:string, title:string,message:string, date:string, options = {}) => {
    clearHide();
    let toast = notifyHtml(type, title, message, date);
    let container = document.getElementById('toast-container') as HTMLInputElement | null;
    if(container != null){
        container.insertAdjacentHTML("afterbegin", toast.html);
        const toastEl = document.querySelectorAll('#toast-container #'+toast.id+'[data-see="false"]');
        toastEl[0].setAttribute("data-see", "true");
        if(bootstrap != null){
            new bootstrap.Toast(toastEl[0], options).show();
        }
    }
};