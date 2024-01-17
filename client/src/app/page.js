"use client"
import axios from 'axios'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleCreateProduct = async (e) => {
        e.preventDefault()
        const data = {
            title: title,
            price: price,
            description: description
        }
        console.log(data)

        try {
            const response = await axios.post("http://localhost:8000/api/product", data)
            const result = await response.data
            console.log(result)
            setDescription("")
            setPrice(0)
            setTitle("")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <main className={styles.main}>

            <form onSubmit={handleCreateProduct}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" name="" id=""
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </main>
    )
}
