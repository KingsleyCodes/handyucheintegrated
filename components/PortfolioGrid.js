import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import Image from 'next/image';

export default function PortfolioGrid({ category }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const q = query(
          collection(db, "portfolio"),
          where("category", "==", category),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (category) fetchPortfolio();
  }, [category]);

  if (loading) return <div className="text-center py-10 animate-pulse">Loading menu...</div>;
  if (items.length === 0) return null; // Hide section if no items are uploaded yet

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
          <div className="h-56 relative overflow-hidden">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">{item.price}</span>
              <button className="text-blue-600 font-semibold text-sm hover:underline">Order Now →</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}