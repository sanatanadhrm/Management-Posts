interface IPayloadAddPost {
    title: string;
    platformId: number;
    statusId: number;
    payment: number;
    due_date: Date;
    brand: string;
  }
  
  class AddPost {
    public readonly title: string;
    public readonly platformId: number;
    public readonly statusId: number;
    public readonly payment: number;
    public readonly due_date: Date;
    public readonly brand: string;
  
    constructor(payload: IPayloadAddPost) {
      this.verifyPayload(payload);
      
      this.title = payload.title;
      this.platformId = payload.platformId;
      this.statusId = payload.statusId;
      this.payment = payload.payment;
      this.due_date = payload.due_date;
      this.brand = payload.brand;
    }
  
    private verifyPayload(payload: Partial<IPayloadAddPost>): void {
      const {title, platformId, statusId, payment, due_date, brand } = payload;
  
      if ( title === undefined || 
        platformId === undefined || 
        statusId === undefined || 
        payment === undefined || 
        due_date === undefined || 
        brand === undefined) {
        throw new Error("ADD_POST.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof title !== "string" || 
        typeof platformId !== "number" || 
        typeof statusId !== "number" || 
        typeof payment !== "number" || 
        typeof due_date !== "string" || 
        typeof brand !== "string") {
        throw new Error("ADD_POST.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default AddPost;