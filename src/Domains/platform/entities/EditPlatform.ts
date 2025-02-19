interface IPayloadEditPlatform {
    id: number;
    name: string;
  }
  
  class EditPlatform {
    public readonly name: string;
    public readonly id: number;
  
    constructor(payload: IPayloadEditPlatform) {
      this.verifyPayload(payload);
      this.id = payload.id;
      this.name = payload.name;
    }
  
    private verifyPayload(payload: Partial<IPayloadEditPlatform>): void {
      const {id, name } = payload;
  
      if ( name === undefined || id === undefined) {
        throw new Error("EDIT_PLATFORM.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof name !== "string" || typeof id !== "number") {
        throw new Error("EDIT_PLATFORM.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default EditPlatform;