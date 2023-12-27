import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
        </div>
      </Header>
    </div>
  );
};

export default Home;
