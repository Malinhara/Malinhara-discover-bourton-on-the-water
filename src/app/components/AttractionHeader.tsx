export default function AttractionHeader({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-r from-primary-color to-blue-900 text-white p-8 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
    </div>
  )
}
