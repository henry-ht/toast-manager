const toastManager = {
    modalTypes: {
        "primary"  : "text-bg-primary",
        "secondary": "text-bg-secondary",
        "danger"   : "text-bg-danger",
        "dark"     : "text-bg-dark",
        "info"     : "text-bg-info",
        "light"    : "text-bg-light",
        "success"  : "text-bg-success",
        "warning"  : "text-bg-warning",
    },

    clearHide: () => {
        const toastHiden = document.querySelectorAll('#toast-container .toast.hide');
        [...toastHiden].map(toast => toast.remove())
    },

    simple: (type, message) => {
        let id = "t"+Math.floor(Math.random() * Date.now());
        let html = '<div class="toast '+toastManager.modalTypes[type]+' border-0 mb-3 animate__animated animate__fadeInRight" id="'+id+'" data-see="false" role="alert" data-bs-autohide="true" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">'+message+'</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>';
        return {html, id};
    },

    simpleNotify: (type, message) => {
        toastManager.clearHide();
        let toast = toastManager.simple(type, message);
        document.getElementById('toast-container').insertAdjacentHTML("afterbegin", toast.html);
        const toastEl = document.querySelectorAll('#toast-container #'+toast.id+'[data-see="false"]');
        toastEl[0].setAttribute("data-see", true);
        new bootstrap.Toast(toastEl[0], {}).show();
    }
};
  
module.exports = {
    toastManager
};