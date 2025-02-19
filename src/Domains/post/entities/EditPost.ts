interface IPayloadEditPost {
    title: string;
    platformId: number;
    statusId: number;
    payment: number;
    due_date: Date;
    brand: string;
  }
  
  class EditPost {
    public readonly title: string;
    public readonly platformId: number;
    public readonly statusId: number;
    public readonly payment: number;
    public readonly due_date: Date;
    public readonly brand: string;
  
    constructor(payload: IPayloadEditPost) {
      this.verifyPayload(payload);
      
      this.title = payload.title;
      this.platformId = payload.platformId;
      this.statusId = payload.statusId;
      this.payment = payload.payment;
      this.due_date = payload.due_date;
      this.brand = payload.brand;
    }
  
    private verifyPayload(payload: Partial<IPayloadEditPost>): void {
      const {title, platformId, statusId, payment, due_date, brand } = payload;
  
      if ( title === undefined || 
        platformId === undefined || 
        statusId === undefined || 
        payment === undefined || 
        due_date === undefined || 
        brand === undefined) {
        throw new Error("EDIT_POST.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof title !== "string" || 
        typeof platformId !== "number" || 
        typeof statusId !== "number" || 
        typeof payment !== "number" || 
        typeof due_date !== "string" || 
        typeof brand !== "string") {
        throw new Error("EDIT_POST.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default EditPost;