import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('lou')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e)=>{
        // prevent from refreshing when add button is clicked
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{ 'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false)
            // redirect to home in the app
            history.push('/')
        })
     
    }

    return ( 
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange = {(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange = {(e)=> setBody(e.target.value)}
                >
                    
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange = {(e)=> setAuthor(e.target.value)}
                >
                    <option value="mary">Mary</option>
                    <option value="lou">Lou</option>
                </select>
               { !isPending &&<button>Add Blog</button>}
               { isPending &&<button>Adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;