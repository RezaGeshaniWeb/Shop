import BlogPage from "../components/templates/BlogPage";

async function getBlogs() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const filterData = data.slice(0, 8)
    return filterData
}

export default async function Blogs() {
    const data = await getBlogs()
    return <BlogPage data={data} />
}
