import { AxiosError } from 'axios';
import _ from 'lodash';

export function getErrorMessage(error: AxiosError): string {
    const errorMessage = _.get(error, 'response.data');
    if (errorMessage) {
        if (_.isString(errorMessage.message)) {
            return errorMessage.message;
        }
        if (_.isString(errorMessage)) {
            return errorMessage;
        }
        if (_.isString(errorMessage.errorMessage)) {
            return errorMessage.errorMessage;
        }
    }

    return 'Something went wrong';
}
