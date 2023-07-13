import PageLayout from "@/app/components/PageLayout"





export default function EventPage({ params }: { params: { slug: string } }) {

  return (
    <PageLayout>
      <div>
        <h1>You're looking at {params.slug} event</h1>
      </div>

    </PageLayout>
  )
}