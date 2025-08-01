// src/pages/CreateBookPage.tsx
import { CreateBookForm } from "@/components/CreateBookForm";
import { PenBox } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CreateBookPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Navigate back to books page after creation
    navigate("/books");
  };

  return (
    <div className="container py-8 px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center"><PenBox size={30}/> &nbsp; Create New Book</h1>
      <CreateBookForm onSuccess={handleSuccess} />
    </div>
  );
}
