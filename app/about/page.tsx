import PageLayout from "../components/PageLayout"







export default function About() {

  return (
    <PageLayout>
      <div className="mt-4 mb-6">
        <h1 className="text-3xl">About The Famous Physics Club</h1>
      </div>
      <div>
        <p className="mb-4">
          For a thousand years the tradition of keeping and maintaining student curiosity in physics has been managed by this club. It went through thick and thin, through the dehydrating deserts and surface erroding winds in Sibera, our agents and missionaries carried along.
        </p>
        <p className="mb-4">
          Also, we have a microwave, a fridge, two large whiteboards, snacks from time to time thanks to awesome contributions of our distinguished members.
        </p>
        <p className="mb-4">
          But more importantly, it's an awesome place of comrodary among fellow Physics and CS undergraduates, where we work together, discuss interesting ideas, socialize and pull all-nighters. (Actually happened a couple times.)
        </p>
      </div>
      
    </PageLayout>
  )
}