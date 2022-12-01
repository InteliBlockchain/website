import { FooterProps } from '@typescript/interfaces';

const Footer = (hide?: FooterProps) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div>
      <footer
        className={
          'sm:fixed w-full md:bottom-0 px-2 py-4 rounded-t-lg mx-auto text-end z-10 shadow-lg border-t-gray-400 text-sm'
        }
      >
        <span>
          Copyright © {today.getUTCFullYear()} Inteli Blockchain. All rights
          reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
