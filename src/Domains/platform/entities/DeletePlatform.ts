export interface IDeletePlatform {
    id: number;
}

class DeletePlatform {
    public readonly id: number;
    constructor(payload : IDeletePlatform) {
        this.verifyPayload(payload);
        this.id = payload.id;
    }

    private verifyPayload(payload: Partial<IDeletePlatform>): void {
        const {id} = payload;
        if(id === undefined) {
            throw new Error("DELETE_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY");
        }
        if(typeof id !== "number") {
            throw new Error("DELETE_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION");
        }
    }
}

export default DeletePlatform;