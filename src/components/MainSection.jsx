import FlashSiteErrors from "./FlashSiteErrors";

const MainSection = ({ element }) => {
  return (
    <main className="container flex-fill">
      <FlashSiteErrors />
        {element}
    </main>
  );
};

export default MainSection;