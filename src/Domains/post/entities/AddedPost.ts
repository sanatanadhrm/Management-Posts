interface IPayloadAddedPost {
    id: number;
    title: string;
    platform:string;
    status: string;
  }
  
  class AddedPost {
    public readonly id: number;
    public readonly title: string;
    public readonly platform: string;
    public readonly status: string;
  
    constructor(payload: IPayloadAddedPost) {
      this.verifyPayload(payload);
      this.id = payload.id;
      this.title = payload.title;
      this.platform = payload.platform;
      this.status = payload.status;
    }
  
    private verifyPayload(payload: Partial<IPayloadAddedPost>): void {
      const {id, title, status, platform} = payload;
  
      if ( title === undefined || status === undefined || id === undefined || platform === undefined) {
        throw new Error("ADDED_POST.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof title !== "string" || typeof status !== "string" || typeof id !== "number" || typeof platform !== "string") {
        throw new Error("ADDED_POST.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default AddedPost;