import { useEffect, useState } from "react"
import { getWishlist } from "@/lib/axios"
import { BookCard } from "@/components/BookCard"
import { BookmarkCheck } from "lucide-react"

export function WishlistPage() {
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true)
        const response = await getWishlist()
        setWishlist(response.data.books)
      } catch (error) {
        console.error('Error fetching wishlist:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWishlist()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><BookmarkCheck size={30}/> &nbsp; My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((book) => (
            <BookCard key={book._id} book={book} inWishlist={true} />
          ))}
        </div>
      )}
    </div>
  )
}