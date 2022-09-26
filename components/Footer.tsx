const Footer = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <footer
      className="w-full fixed bottom-0 px-2 py-4 rounded-t-lg mx-auto text-end bg
     shadow-lg
    "
    >
      {/* <hr /> */}

      <span>© Inteli Blockchain - {today.toDateString()}</span>
    </footer>
  );
};

export default Footer;
