class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}


const r1es = new Resp<string, number>('data');


class HTTPResp<F> extends Resp<string, number>{
    code: number;

    setCode(code: number) {
        this.code = code;
    }
}

const res23 = new HTTPResp();