interface IPayloadEditedPost {
    id: number;
    title: string;
    platform: string;
    status: string;
    payment: number;
    due_date: Date;
    brand: string;
    updated_at: Date;
  }
  
  class EditedPost {
    public readonly id: number;
    public readonly title: string;
    public readonly platform: string;
    public readonly status: string;
    public readonly payment: number;
    public readonly due_date: Date;
    public readonly brand: string;
    public readonly updated_at: Date;
  
    constructor(payload: IPayloadEditedPost) {
      this.verifyPayload(payload);
      
      this.id = payload.id;
      this.title = payload.title;
      this.platform = payload.platform;
      this.status = payload.status;
      this.payment = payload.payment;
      this.due_date = payload.due_date;
      this.brand = payload.brand;
      this.updated_at = payload.updated_at;
    }
  
    private verifyPayload(payload: Partial<IPayloadEditedPost>): void {
      const {title, platform, status, payment, due_date, brand, id, updated_at } = payload;
  
      if ( 
        id === undefined ||
        title === undefined || 
        platform === undefined || 
        status === undefined || 
        payment === undefined || 
        due_date === undefined || 
        brand === undefined ||
        updated_at === undefined) {
        throw new Error("EDITED_POST.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( 
        typeof id !== "number" ||
        typeof title !== "string" || 
        typeof platform !== "string" || 
        typeof status !== "string" || 
        typeof payment !== "number" || 
        typeof due_date !== "object" || 
        typeof brand !== "string" ||
        typeof updated_at !== "object"
    ) {
        throw new Error("EDITED_POST.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default EditedPost;