import Logo from './components/Logo.jsx'
import Button from './components/Button.jsx'
import CatalogCard from './components/CatalogCard.jsx'
import CreateCard from './components/CreateCard.jsx'

const catalogs = [
  { id: 1, title: 'Christmas 2024', tags: ['Sneakers', 'boots'], date: '12.27.2024', products: 254 },
  {
    id: 2,
    title: 'A very big title for a catalog with many thing',
    tags: ['Sneakers', 'boots', 'Belt', 'Socks', '+3'],
    date: '12.27.2024',
    products: 254,
  },
]

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-content flex-col bg-background font-sans text-black md:flex-row">
      <aside className="bg-sidebar px-4 py-4 md:w-60 md:shrink-0 md:px-6 md:py-6">
        <Logo />
      </aside>
      <main className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-black">My Catalogs</h1>
          <Button>Create catalog</Button>
        </header>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <CreateCard />
          {catalogs.map((catalog) => (
            <CatalogCard key={catalog.id} {...catalog} />
          ))}
        </section>
      </main>
    </div>
  )
}
