interface IPayloadGetPost {
    id: number;
    title: string;
    platform: string;
    status: string;
    payment: number;
    due_date: Date;
    brand: string;
    created_at: Date;
    updated_at: Date;
  }
  
  class GetPost {
    public readonly id: number;
    public readonly title: string;
    public readonly platform: string;
    public readonly status: string;
    public readonly payment: number;
    public readonly due_date: Date;
    public readonly brand: string;
    public readonly created_at: Date;
    public readonly updated_at: Date;
  
    constructor(payload: IPayloadGetPost) {
      this.verifyPayload(payload);
      
      this.id = payload.id;
      this.title = payload.title;
      this.platform = payload.platform;
      this.status = payload.status;
      this.payment = payload.payment;
      this.due_date = payload.due_date;
      this.brand = payload.brand;
      this.created_at = payload.created_at;
      this.updated_at = payload.updated_at;
    }
  
    private verifyPayload(payload: Partial<IPayloadGetPost>): void {
      const {
        id, 
        title, 
        platform, 
        status, 
        payment, 
        due_date, 
        brand, 
        created_at, 
        updated_at 
    } = payload;
  
      if ( 
        id === undefined ||
        title === undefined || 
        platform === undefined || 
        status === undefined || 
        payment === undefined || 
        due_date === undefined || 
        brand === undefined ||
        created_at === undefined ||
        updated_at  === undefined
    ) {
        throw new Error("GET_POST.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if ( typeof title !== "string" || 
        typeof platform !== "string" || 
        typeof status !== "string" || 
        typeof payment !== "number" || 
        typeof due_date !== "object" || 
        typeof brand !== "string" ||
        typeof created_at !== "object" ||
        typeof updated_at !== "object"
    ) {
        throw new Error("GET_POST.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  export default GetPost;