import Card from "./Card";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center content-center m-6 p-3 gap-3">
        <Card
          image="https://images.unsplash.com/photo-1726004592905-dc5cd794bda6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZ3xlbnwwfDJ8MHx8fDA%3D"
          button="Explore"
        />
        <Card
          image="https://images.unsplash.com/photo-1738814041356-9f8187530643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhc2lubyUyMDNkfGVufDB8Mnw0fHx8MA%3D%3D"
          button="Explore"
        />
        <Card
          image="https://images.unsplash.com/photo-1726003906867-081fc895ce5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzaW5vJTIwM2R8ZW58MHx8MHx8fDA%3D"
          button="Explore"
        />
      </div>
    </>
  );
};

export default Navbar;
