# Toast Manager - Maneja Notificaciones de bootstrap de manera dinámica

Añade magia a tu web con nuestro paquete npm básico. Notificaciones locales y toasts dinámicos con Bootstrap 5 o superior. Mejora la experiencia del usuario de manera sencilla y efectiva. ¡Descúbrelo ahora!

## Install

npm i @henryht/toast-manager

## Usage

1. import

```
import * as Popper from "@popperjs/core"
window.Popper = Popper;
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import * as toastManager from '@henryht/toast-manager';
window.toastManager = toastManager;
```

2. Methods

```toastManager.notify(type:string, title:string, message:string, date:string, options = {});```
<img src="img/notify-1.png" alt="see notify">

```toastManager.simpleNotify(type:string, message:string, options = {});```
<img src="img/simple-notify-1.png" alt="see simple notify">

```toastManager.clearHide();```

5. HTML container

```
<div class="toast-container position-reelative top-2 end-0 p-3" id="toast-container" style="z-index: 9999">
</div>
```

4. Toast Types (notifications)

- primary 
- secondary 
- danger
- dark
- info
- light
- success
- warning


## License

The Toast Manager is open-sourced library licensed under the [MIT license](https://opensource.org/licenses/MIT).