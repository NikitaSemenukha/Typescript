// type statusReq = 'success' | 'failed';

// interface Req {
//     sum: number,
//     from: number,
//     to: number
// };

// interface successReq extends Req {
//     databaseId: number
// };

// interface errorReq {
//     errorMessage: string,
//     errorCode: number
// };

// interface Output {

//     status: statusReq,
//     data: {

//     }
// }

// function request(req: Output) {
//     if (req.status === 'success') {
//         // Возвращаем объект с типом данных successReq, содержащимся в свойстве data
//         return { status: 'success', data: req.data as successReq };
//     } else {
//         // Возвращаем объект с типом данных errorReq, содержащимся в свойстве data
//         return { status: 'failed', data: req.data as errorReq };
//     }
// }






// request({ status: 'success', data: {} })

enum PaementStatus {
    Success = 'success',
    Failed = 'failed',
};

interface IPayment {
    sum: number,
    from: number,
    to: number,
};

interface IPaymentRequest extends IPayment { };

interface IDataSuccess extends IPayment {
    databaseId: number,
};

interface IDataFailed {
    errorMessage: string,
    errorCode: number,
};

interface IResponseSuccess {
    status: PaementStatus.Success,
    data: IDataSuccess,
};

interface IResponseFailed {
    status: PaementStatus.Failed,
    data: IDataFailed,
};


function isResponce(request: IResponseSuccess | IResponseFailed): request is IResponseSuccess {
    return (request as IResponseSuccess) !== undefined;
};

function getDatabaseID(res: IResponseSuccess | IResponseFailed): number {

    if (isResponce(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
};