"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "@/lib/db";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function PublicGallery({ category, title = "Our Work" }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryImages() {
      if (!category) return;
      
      try {
        setLoading(true);
        const galleriesRef = collection(db, "galleries");
        const q = query(galleriesRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);

        const fetchedImages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort newest first
        fetchedImages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGalleryImages();
  }, [category]);

  // Don't display anything while checking or if empty
  if (loading || !images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our recent projects and featured works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={img.imageUrl}
                  alt={img.title || "Gallery photo"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              {img.title && (
                <div className="p-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {img.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}