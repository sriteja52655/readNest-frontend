import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createBook } from "@/lib/axios";

export function CreateBookForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    description: "",
    publishedYear: "",
    genre: "",
    forwardedTo: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Convert genre string to array
      const bookData = {
        ...formData,
        genre: formData.genre.split(",").map((g) => g.trim()),
        publishedYear: parseInt(formData.publishedYear)
      };
      await createBook(bookData);
      setFormData({
        title: "",
        image: "",
        author: "",
        description: "",
        publishedYear: "",
        genre: "",
        forwardedTo: ""
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error creating book:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <Input name="title" placeholder="Book Title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <Input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      </div>
      <div>
        <Input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      </div>
      <div>
        <Input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <Input name="publishedYear" type="number" placeholder="Published Year" value={formData.publishedYear} onChange={handleChange} required />
      </div>
      <div>
        <Input name="genre" placeholder="Genres (comma-separated)" value={formData.genre} onChange={handleChange} required />
      </div>
      <div>
        <Input name="forwardedTo" placeholder="Forwarded To URL" value={formData.forwardedTo} onChange={handleChange} required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Book"}
      </Button>
    </form>
  );
}
