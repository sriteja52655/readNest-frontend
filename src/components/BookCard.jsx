import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { addToWishlist } from "@/lib/axios"
import { useState } from "react"

export function BookCard({ book, inWishlist }) {
  
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToWishlist = async () => {
    try {
      setIsLoading(true)
      await addToWishlist(book._id)
    } catch (error) {
      console.error('Error adding to wishlist:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>By {book.author}</CardDescription>
      </CardHeader>
      <CardContent>
        {book.image && (
          <img 
            src={book.image} 
            alt={book.title} 
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
        )}
        <p className="text-sm text-gray-600">{book.description}</p>
        <div className="mt-1">
          <span className="text-sm font-semibold">Published:</span> {book.publishedYear}
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          {book.genre.map((g, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-2">
          {!inWishlist && (
            <Button 
              onClick={handleAddToWishlist} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Adding..." : "Add to Wishlist"}
            </Button>
          )}
        {inWishlist && (
          <Button 
            variant="secondary" 
            disabled 
          >
            In Wishlist
          </Button>)}
          <Button><a href={book.forwardedTo} target="_blank">buy it</a></Button>
        </div>
      </CardFooter>
    </Card>
  )
}