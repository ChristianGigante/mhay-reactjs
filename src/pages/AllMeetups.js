import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "c1",
    title: "This is a first meetup",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/best-illustrator.jpg?auto=format&q=60&w=1890&h=1417.5&fit=crop&crop=faces",
    address: "Banilad, Cebu City, Cebu",
    description: "The quick brown fox jump over the lazy dog.",
  },
  {
    id: "c2",
    title: "This is a first meetup",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/best-illustrator.jpg?auto=format&q=60&w=1890&h=1417.5&fit=crop&crop=faces",
    address: "Banilad, Cebu City, Cebu",
    description: "The quick brown fox jump over the lazy dog.",
  },
  {
    id: "c3",
    title: "This is a first meetup",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/best-illustrator.jpg?auto=format&q=60&w=1890&h=1417.5&fit=crop&crop=faces",
    address: "Banilad, Cebu City, Cebu",
    description: "The quick brown fox jump over the lazy dog.",
  },
  {
    id: "c4",
    title: "This is a first meetup",
    image:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/best-illustrator.jpg?auto=format&q=60&w=1890&h=1417.5&fit=crop&crop=faces",
    address: "Banilad, Cebu City, Cebu",
    description: "The quick brown fox jump over the lazy dog.",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
