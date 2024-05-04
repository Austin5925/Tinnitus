export interface Post {
  _id: string;
  title: string;
  desc: string;
  img?: string;
  slug: string;
  userid: string;
  createdAt: Date;
  updatedAt?: Date;
}
