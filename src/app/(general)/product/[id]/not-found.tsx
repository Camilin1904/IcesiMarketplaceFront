
export default function NotFound(){
    return (
        <div className="flex flex-col">
            <h2>
                Product Not Found
            </h2>
            <p>Could not find product with Id</p>
            <link className="mt-4 p-2 bg-gray-100 text-black rounded hover:bg-gray-600 transition-all" href="/">Return home</link>
        </div>
    )
}