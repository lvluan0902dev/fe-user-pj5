import { BlogCategory } from "../blog-category/blog-category.model";

export interface Blog {
    id: number,
    title: number,
    content: number,
    image_name: string,
    image_path: string,
    url: string,
    blog_category_id: number,
    blog_category: BlogCategory,
    view_count: number,
    created_at: string,
    updated_at: string
}
