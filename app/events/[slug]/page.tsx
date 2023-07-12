



export default function EventPage({ params }: { params: { slug: string } }) {

  return (
    <main>
      <div>
        <h1>You're looking at {params.slug} event</h1>
      </div>
      
    </main>
  )
}