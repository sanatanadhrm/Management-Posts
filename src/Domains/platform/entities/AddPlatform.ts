interface IPayloadAddPlatform {
    name: string;
  }
  
  class AddPlatform {
    public readonly name: string;
  
    constructor(payload: IPayloadAddPlatform) {
      this.verifyPayload(payload);
      
      this.name = payload.name;
    }
  
    private verifyPayload(payload: Partial<IPayloadAddPlatform>): void {
      const {name } = payload;
  
      if ( name === undefined) {
        throw new Error("ADD_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof name !== "string") {
        throw new Error("ADD_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default AddPlatform;