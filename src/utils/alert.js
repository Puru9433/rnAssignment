import { showMessage } from 'react-native-flash-message';

const config = {
    animated: true,
    duration: 3000,
    autoHide: true,
    type: 'danger',
    position: 'top'
}

export const errorToast = title => {
    showMessage({
        ...config,
        message: title ? title : 'Error',
        icon: 'danger',
        type: 'danger',
        duration: 5500,
    });
};

export const successToast = title => {
    showMessage({
        ...config,
        message: title ? title : 'Error',
        icon: 'success',
        type: 'success',
        duration: 5500,
    });
}




