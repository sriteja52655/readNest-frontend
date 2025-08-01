import { Sidebar } from "@/components/ui/sidebar";
import { BookmarkCheck, BookOpenCheck, Book, PenBox } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export function AppSidebar() {
  return (
    <Sidebar className="bg-white w-64 min-h-screen shadow-md border-r border-gray-200 p-4">
      {/* Website Title */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <Book size={28} className="text-indigo-600" />
        <h1 className="text-2xl font-bold text-indigo-700">ReadNest</h1>
      </div>

      {/* Nav Menu */}
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/books"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <BookOpenCheck size={22} />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <BookmarkCheck size={22} />
              <span>Wishlist</span>
            </Link>
            </li>
          <li>
            <Link
              to="/books/create"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <PenBox size={22} />
              <span>add new book</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
}
