const Parallax = () => {
  return (
    <div>
      <div className="bg-hero min-h-[500px] fixed bg-center bg-no-repeat bg-cover">
        <p>
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </p>
      </div>
    </div>
  );
};

export default Parallax;
