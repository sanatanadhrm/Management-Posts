interface IPayloadGetStatus {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  }
  
  class GetStatus {
    public readonly id: number;
    public readonly name: string;
    public readonly created_at: Date;
    public readonly updated_at: Date;
  
    constructor(payload: IPayloadGetStatus) {
      this.verifyPayload(payload);
      
      this.id = payload.id;
      this.name = payload.name;
      this.created_at = payload.created_at;
      this.updated_at = payload.updated_at;
    }
  
    private verifyPayload(payload: Partial<IPayloadGetStatus>): void {
      const { id, name, created_at, updated_at } = payload;
  
      if (id === undefined || name === undefined || created_at === undefined || updated_at === undefined) {
        throw new Error("GET_STATUS.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if (typeof id !== "number" || typeof name !== "string" || typeof created_at !== "object" || typeof updated_at !== "object") {
        throw new Error("GET_STATUS.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default GetStatus;