import { actions as toastrActions } from 'react-redux-toastr';
import { toastOptions } from '../../constants/toastOptions'

export function errorToast(message, systemMessage = "") {
    return toastrActions.add({ ...toastOptions.error, message: message + " - " + systemMessage });
}
export function successToast(message, systemMessage) {
    return toastrActions.add({ ...toastOptions.success, message: message });
}
export function warningToast(message, systemMessage) {
    return toastrActions.add({ ...toastOptions.warning, message: message });
}
export function infoToast(message, systemMessage) {
    return toastrActions.add({ ...toastOptions.info, message: message });
}
