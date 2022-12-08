import { Blog } from "../blog/blog.model"

export interface BlogCategory {
    id: number,
    name: string,
    blogCount: number,
    blogs: Blog[],
    created_at: string,
    updated_at: string
}
