interface Props {
  hide: boolean;
}

const Footer = (hide: Props) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <footer
      className={
        hide
          ? "hidden"
          : "md:fixed w-full md:bottom-0 px-2 py-4 rounded-t-lg mx-auto text-end bg shadow-lg border-t-gray-400 text-sm"
      }
    >
      <span>
        Copyright © {today.getUTCFullYear()} Inteli Blockchain. All rights
        reserved.
      </span>
    </footer>
  );
};

export default Footer;
