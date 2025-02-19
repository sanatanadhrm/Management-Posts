interface IPayloadAddedPlatform {
    id: number;
    name: string;
  }
  
  class AddedPlatform {
    public readonly id: number;
    public readonly name: string;
  
    constructor(payload: IPayloadAddedPlatform) {
      this.verifyPayload(payload);
      this.id = payload.id;
      this.name = payload.name;
    }
  
    private verifyPayload(payload: Partial<IPayloadAddedPlatform>): void {
      const {id, name} = payload;
  
      if ( name === undefined) {
        throw new Error("ADDED_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof name !== "string") {
        throw new Error("ADDED_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default AddedPlatform;