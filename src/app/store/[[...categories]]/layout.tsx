import { getCollections } from "@/services/collections"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections()
  
    return (
      <main>
        <nav>
          {
            collections.map((collection) => (
              <Link key={collection.id} href={'/store/' + collection.handle}>
                {collection.title}
              </Link>
            ))
          }
        </nav>
        {children}
      </main>
    )
        }