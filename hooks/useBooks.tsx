import { useEffect, useState } from "react";

type Book = {
    id: number,
    image: string,
    name: string,
    pages: number,
    fk_category: number;
    fk_author: number,
}

const useBooks = (url: string): [Book[], boolean] => {

    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const getBooks = async() => {
            try{
                const response = await fetch(url);
                const data = await response.json();

                const livros = Array.isArray(data) ? data : [data];

                setBooks(livros);
                
                data.length === 0 ? setLoading(true) : setLoading(false);
            }catch(error){
                console.log('Error to fetch');
                setLoading(true);
            }
        }

        getBooks();
    }, [url])

    return [books, loading];
}

export default useBooks;